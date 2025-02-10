<script lang="ts" setup>
import { defineEmits, defineProps, ref, watch } from "vue";

// รับ Props
const props = defineProps({
  placeholder: {
    type: String,
    default: "Search",
  },
  modelValue: {
    type: String || Number,
    default: "",
  },
  label: {
    type: String,
    default: "label",
  },
  type: {
    type: String,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue"]);

const data = ref<string>(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    data.value = newValue;
  }
);

watch(data, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<template>
  <div class="relative flex flex-col items-start w-full">
    <label v-if="props.label != ''">{{ label }} :</label>
    <input
      :type="props.type"
      class="h-[40px] w-full rounded-lg border border-gray-400 pl-3 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :placeholder="placeholder"
      v-model="data"
    />
  </div>
</template>

<style scoped>
input {
  background-color: #f2f2f2;
  border: none;
}

input:focus {
  box-shadow: none;
}
</style>
