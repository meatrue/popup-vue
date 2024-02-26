<script setup>
const emit = defineEmits(['click']);
</script>

<template>
  <button class="button-start" @click="emit('click')">
    Начать
  </button>
</template>

<style scoped>
.button-start {
  min-width: 300px;
  padding: 20px 40px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: white;
  text-align: center;
  background-color: #043fc9;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease-out;
}

.button-start:hover {
  background-color: #4771d3;
}
</style>