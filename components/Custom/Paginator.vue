<template>
  <div class="flex items-center gap-1 text-[14px]">
    <button
      :disabled="currentPage === 1"
      @click="goToPage(1)"
      class="transition px-2 py-1 rounded-full hover:bg-gray-700 disabled:opacity-50"
    >
      &lt;&lt;
    </button>

    <button
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
      class="transition px-2 py-1 rounded-full hover:bg-gray-700 disabled:opacity-50"
    >
      &lt;
    </button>

    <!-- Show pages before the current group -->
    <button
      v-if="startPage > 1"
      class="transition px-2 py-1 rounded-full hover:bg-gray-700"
      @click="goToPage(1)"
    >
      1
    </button>

    <button
      v-if="startPage > 2"
      class="transition px-2 py-1 rounded-full hover:bg-gray-700"
      @click="goToPage(startPage - 1)"
    >
      ...
    </button>

    <!-- Page numbers -->
    <button
      v-for="page in showPages"
      :key="page"
      :class="[
        'transition px-2 py-1 rounded-full',
        {
          'bg-[#1F1D2B] text-white': currentPage === page,
          'hover:bg-gray-700': currentPage !== page,
          'w-8 h-8 flex items-center justify-center': true, // ทำให้ปุ่มเป็นวงกลม
        },
      ]"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <!-- Show pages after the current group -->
    <button
      v-if="endPage < totalPages"
      class="transition px-2 py-1 rounded-full hover:bg-gray-700"
      @click="goToPage(endPage + 1)"
    >
      ...
    </button>

    <button
      v-if="endPage < totalPages"
      class="transition px-2 py-1 rounded-full hover:bg-gray-700"
      @click="goToPage(totalPages)"
    >
      {{ totalPages }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
      class="transition px-2 py-1 rounded-full hover:bg-gray-700 disabled:opacity-50"
    >
      &gt;
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="goToPage(totalPages)"
      class="transition px-2 py-1 rounded-full hover:bg-gray-700 disabled:opacity-50"
    >
      &gt;&gt;
    </button>
  </div>
</template>

<script setup>
import { computed, defineEmits, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:currentPage"]);

const currentPage = ref(1);
const totalPages = ref(1);

watch(
  () => props.totalPages,
  (newValue) => {
    totalPages.value = newValue;

    if (totalPages.value === 0) {
      totalPages.value = 1;
    }
  }
);

watch(
  () => props.currentPage,
  (newValue) => {
    currentPage.value = newValue;
  }
);

watch(currentPage, (newValue) => {
  emit("update:currentPage", newValue);
});

const delta = ref(6); // เริ่มต้นที่ 6
const startPage = computed(
  () => Math.floor((currentPage.value - 1) / delta.value) * delta.value + 1
);
const endPage = computed(() =>
  Math.min(startPage.value + delta.value - 1, totalPages.value)
);

// คำนวณหมายเลขหน้าที่จะแสดงในช่วงหน้า
const showPages = computed(() => {
  const pages = [];
  for (let i = startPage.value; i <= endPage.value; i++) {
    pages.push(i);
  }
  return pages;
});

// เปลี่ยนหน้าไปยังหน้าที่เลือก
const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
};

// ฟังก์ชั่นเช็คขนาดหน้าจอ
const adjustDelta = () => {
  if (window.innerWidth <= 540) {
    delta.value = 2;
  } else {
    delta.value = 6;
  }
};

// เมื่อโหลดหน้าและเมื่อขนาดหน้าจอเปลี่ยน
onMounted(() => {
  currentPage.value = 1;
  adjustDelta();
  window.addEventListener("resize", adjustDelta); // เพิ่ม event listener
});

// เมื่อ component จะถูกทำลาย (ลบ event listener)
onBeforeUnmount(() => {
  window.removeEventListener("resize", adjustDelta);
});
</script>

<style scoped>
/* Optional: Customize the styles */
</style>
