<template>
  <div id="app">
    <DefaultLayout>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()

onMounted(() => {
  appStore.fetchRepoData()
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
