<template>
  <Dropdown
    v-model="value"
    :options="props.options"
    optionLabel="name"
    :placeholder="props.placeholder"
    class="border border-[#393C49] border-[1px] bg-[#1F1D2B] text-[#ffffff] pl-[16px] py-[8px] w-auto rounded-[8px] leading-[19.6px] font-[400] focus:outline-none"
  >
  </Dropdown>
</template>

<script setup>
import { defineEmits, defineProps, ref } from "vue";

onMounted(() => {
  // CUSTOM CSS
  if (true) {
    const observer = new MutationObserver(() => {
      const dropdownPanel = document.querySelector(".p-dropdown-panel");
      const dropdownHighlight = document.querySelector(".p-highlight");
      const dropdownItems = document.querySelectorAll(".p-dropdown-item");
      const empty = document.querySelector(".p-dropdown-empty-message");

      if (dropdownPanel) {
        dropdownPanel.style.backgroundColor = "#1F1D2B";
        dropdownPanel.style.color = "#ffffff";
        dropdownPanel.style.border = "1px solid #393C49";
        dropdownPanel.style.borderRadius = "8px";
        dropdownPanel.style.boxShadow = "none";
        dropdownPanel.style.marginTop = "5px";
      }

      if (empty) {
        empty.style.padding = "8px 16px";
      }

      if (dropdownHighlight) {
        dropdownHighlight.style.backgroundColor = "#252836";
        dropdownHighlight.style.color = "#ffffff";
      }

      if (dropdownItems.length > 0) {
        dropdownItems.forEach((item) => {
          item.style.padding = "8px 16px";
          item.style.color = "#ffffff";
          item.style.fontSize = "14px";
          item.style.borderBottom = "1px solid #393C49";

          item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "#252836"; // สีตอน hover
            item.style.color = "#ffffff";
          });
          item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "transparent"; // สีเดิม
            item.style.color = "#ffffff";
          });
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
});
// END CUSTOME CSS

const props = defineProps({
  placeholder: {
    type: String,
    default: "type something",
  },
  options: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["update:value"]);

const value = ref();

watch(value, (newValue) => {
  emit("update:value", newValue);
});
</script>

<style scoped>
.p-dropdown:not(.p-disabled).p-focus {
  box-shadow: none;
}

.p-dropdown {
  /* padding: 8px 8px 8px 8px; */
  text-align: center;
  align-items: center;
}

::v-deep .p-dropdown-trigger {
  color: #ffffff;
}

::v-deep .p-dropdown-label {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  background-color: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70px;
}

::v-deep .p-dropdown-empty-message {
  padding: 10px;
}
</style>
