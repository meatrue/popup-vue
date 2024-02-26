<script setup>
import { store } from '../store';

const fields = store.fields;
const filteredFields = fields
  ?  Object.values(fields).filter((field) => field.value.length > 0)
  : [];
</script>

<template>
  <section class="info-section">
    <h1 class="title">Данные пользователя</h1>
    <ul class="info-list" v-if="filteredFields.length > 0">
      <li v-for="(field, index) in filteredFields" :key="index">
        <span class="label">{{ field.label }}</span> - {{ field.value }}
      </li>
    </ul>
    <div v-else class="not-found">Данных нет</div>
  </section>
</template>

<style scoped>
  .info-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 28px;
  }

  .info-list {
    padding-left: 0;
    list-style-type: none;
  }

  .label {
    font-weight: 700;
  }

  .not-found {
    text-align: center;
  }
</style>