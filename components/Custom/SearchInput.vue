<script setup>
import { defineEmits, defineProps, ref, watch } from "vue";

// รับ Props
const props = defineProps({
  placeholder: {
    type: String,
    default: "Search",
  },
});

const emit = defineEmits(["update:searchText"]);

const searchText = ref("");

watch(searchText, (newValue) => {
  emit("update:searchText", newValue);
});
</script>

<template>
  <div class="relative flex items-center">
    <span class="absolute left-3 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-4.35-4.35m2.15-6.15a8 8 0 11-16 0 8 8 0 0116 0z"
        />
      </svg>
    </span>

    <input
      type="text"
      class="text-white h-[40px] w-full rounded-lg border border-gray-400 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :placeholder="props.placeholder"
      v-model="searchText"
    />
  </div>
</template>

<style scoped>
input {
  background-color: none;
  border-radius: 8px;
  border: 1px solid #393c49;
}

input:focus {
  box-shadow: none;
  border: 1px solid #fff;
}
</style>
