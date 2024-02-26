<script setup>
defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close']);

</script>

<template>
  <div class="popup" :class="{ open: isOpen }">
    <div class="popup-container">
      <div class="popup-content">
        <slot></slot>
      </div>
    </div>
    <div class="popup-background" @click="emit('close')"></div>
  </div>
</template>

<style scoped>
  .popup {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    opacity: 0;

    transition: transform 0ms 500ms, opacity 500ms 0ms ease-in-out;
  }

  .popup.open {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0ms 0ms, opacity 500ms ease-in-out;

  }

  .popup-background {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.5;
  }

  .popup-container {
    position: absolute;
    z-index: 2;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 250px;
    max-width: 540px;
    min-height: 250px;
    padding: 20px;
  }

  .popup-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
    background-color: #ffffff;
  }
</style>