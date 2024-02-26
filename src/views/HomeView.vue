<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import StartButton from '@/components/StartButton.vue';
import AppPopup from '@/components/AppPopup.vue';
import AppForm from '@/components/AppForm.vue';

const router = useRouter();

const isPopupOpen = ref(false);

const closePopup = () => {
  isPopupOpen.value = false;
};

const openPopup = () => {
  isPopupOpen.value = true;
};

const submit = () => {
  router.push({ name: 'info' });
  closePopup();
}
</script>

<template>
  <section class="container">
    <StartButton @click="openPopup" />
    <app-popup :is-open="isPopupOpen" @close="closePopup">
      <AppForm
        :fields="fields"
        @on-field-change="onFieldChange"
        @submit="submit"
      />
    </app-popup>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>