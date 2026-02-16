<template>
  <div class="not-found">
    <div class="not-found__container container">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__description">Page not found</p>
      <router-link to="/" class="button button--flex">
        Go Home
        <i class="uil uil-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.not-found__title {
  font-size: 6rem;
  margin-bottom: 1rem;
}

.not-found__description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
</style>
