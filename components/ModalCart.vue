<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["update:visible", "confirm"]);

// Close the modal
const closeModal = () => {
  emit("update:visible", false);
};

// Confirm action
const confirmAction = () => {
  emit("confirm");
  closeModal();
};
</script>

<template>
  <div
    v-if="props.visible"
    class="fixed inset-0 bg-cart flex justify-end items-start z-50"
  >
    <!-- Modal content -->
    <div
      class="bg-[#1F1D2B] w-full h-full sm:w-1/3 pl-[24px] pt-[24px] pr-[29px] shadow-lg"
    >
      <div class="flex justify-between items-center">
        <div class="">
          <h3 class="text-[26px] font-[600] leading-[36.4px] mb-[4px]">
            {{ props.title }}
          </h3>
          <slot name="title"></slot>
        </div>

        <button
          @click="closeModal"
          class="bg-[#EA7C69] cursor-pointer shadow-[0px_8px_24px_rgba(234,124,105,0.3)] rounded-[8px]"
        >
          <img class="p-[12px]" src="@/assets/icons/Close.svg" />
        </button>
      </div>

      <div class="h-full">
        <slot name="content"></slot>
      </div>

      <!-- <div class="flex justify-end space-x-4">
        <button
          @click="closeModal"
          class="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          @click="confirmAction"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Confirm
        </button>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.bg-cart {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
