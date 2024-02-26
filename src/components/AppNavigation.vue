<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (routeName) => {
  return routeName === route.name;
};
</script>

<template>
  <nav class="navigation">
    <div>
      <a class="navigation-link" :class="{ active: isActive('home') }" href="/">Главная</a>
    </div>
    <div>
      <a class="navigation-link" :class="{ active: isActive('info') }" href="/info">Информация</a>
    </div>
  </nav>
</template>

<style scoped>
  .navigation {
    display: flex;
    gap: 20px;
    padding: 20px 40px;
  }

  .navigation-link {
    color: #0080ff;
    text-decoration: none;
    transition: opacity 150ms ease-in;
  }

  .navigation-link:not(.active):hover {
    opacity: 0.6;
  }

  .navigation-link.active {
    color: #222222;
  }
</style>