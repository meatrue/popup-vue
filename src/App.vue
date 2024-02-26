<script setup>
import AppNavigation from './components/AppNavigation.vue';
</script>

<template>
  <div class="app-container">
    <AppNavigation />

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
