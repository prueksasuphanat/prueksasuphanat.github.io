<template>
  <div class="default-layout">
    <TheHeader />
    <main class="main">
      <slot />
    </main>

    <div class="flex justify-end items-center gap-4 mr-4! text-[14px] mb-2">
      <span>อัปเดตเมื่อ {{ appStore.updatedAt }}</span>
      <span class="text-gray-500">|</span>
      <div class="flex items-center gap-2">
        <span>ผู้เข้าชม:</span>
        <span v-if="isLoading" class="text-gray-400">กำลังโหลด...</span>
        <span v-else-if="error" class="text-red-400">-</span>
        <span v-else class="font-semibold text-blue-500">{{ visitorCount.toLocaleString() }}</span>
      </div>
    </div>
    5
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { useAppStore } from '@/stores'
import { useVisitorCounter } from '@/composables/features/useVisitorCounter'

const appStore = useAppStore()
const { visitorCount, isLoading, error } = useVisitorCounter()
</script>
