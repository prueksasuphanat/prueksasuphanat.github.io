<template>
  <div class="default-layout">
    <TheHeader />
    <main class="main">
      <slot />
    </main>

    <div class="text-right mr-4! text-[14px]">อัปเดตเมื่อ {{ appStore.updatedAt }}</div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()
</script>
