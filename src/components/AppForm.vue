<script setup>
import { store } from '../store';

const emit = defineEmits(['onFieldChange', 'submit']);

const name = defineModel('name');
const surname = defineModel('surname');
const phone = defineModel('phone');
const email = defineModel('email');
const comment = defineModel('comment');

const handleSubmit = () => {
  const fields = store.fields;

  store.fields = { 
    name: {
      ...fields.name,
      value: name.value ?? ''
    }, 
    surname: {
      ...fields.surname,
      value: surname.value ?? ''
    }, 
    phone: {
      ...fields.phone,
      value: phone.value ?? ''
    }, 
    email: {
      ...fields.email,
      value: email.value ?? ''
    }, 
    comment: {
      ...fields.comment,
      value: comment.value ?? ''
    } 
  }
  emit('submit');
};
</script>

<template>
  <div class="container">
    <h2 class="title">Подобрать программу</h2>

    <form class="form" method="post" @submit.prevent="handleSubmit">
      <div class="form-line">
        <p class="form-item">
          <label for="question-name" class="visually-hidden">
            
          </label>
          <input
            id="question-name"
            class="form-input"
            name="name"
            type="text"
            :placeholder="store.fields.name.label"
            v-model="name"
          >
        </p>
        <p class="form-item">
          <label for="question-surname" class="visually-hidden">
            
          </label>
          <input
            id="question-surname"
            class="form-input"
            name="surname"
            type="text"
            :placeholder="store.fields.surname.label"
            v-model="surname"
          >
        </p>
      </div>

      <div class="form-line">
        <p class="form-item">
          <label for="question-phone" class="visually-hidden">
            
          </label>
          <input
            id="question-phone"
            class="form-input"
            name="phone"
            type="text"
            :placeholder="store.fields.phone.label"
            v-model="phone"
          >
        </p>
        <p class="form-item">
          <label for="question-email" class="visually-hidden">
            
          </label>
          <input
            id="question-email"
            class="form-input"
            name="email"
            type="text"
            :placeholder="store.fields.email.label"
            v-model="email"
          >
        </p>
      </div>

      <div class="form-line">
        <p class="form-item">
          <label for="question-comment" class="visually-hidden">
            
          </label>
          <input
            id="question-comment"
            class="form-input"
            name="comment"
            type="text"
            :placeholder="store.fields.comment.label"
            v-model="comment"
          >
        </p>
      </div>

      <div class="form-item form-item-button">
        <button type="submit" class="form-submit">
          Отправить
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 500;
}

.form {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-line {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.form-item {
  flex-grow: 1;
  min-width: 200px;
  margin-top: 0;
  margin-bottom: 0;
}

.form-item-button {
  display: flex;
  justify-content: center;
}

.form-input {
  display: block;
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  color: #222222;
  border: 1px solid #b6b6b6;
  transition: background-color 150ms ease-out;
}

.form-input:hover {
  border-color: #969696;
}

.form-textarea {
  display: block;
  width: 100%;
  padding: 8px 12px;
  height: 155px;
  overflow: auto;
  resize: none;
  font-size: 14px;
  border: 1px solid #b6b6b6;
  transition: background-color 150ms ease-out;
}

.form-textarea:hover {
  border-color: #969696;
}

.form-submit {
  min-width: 200px;
  padding: 10px 25px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: white;
  text-align: center;
  background-color: #018449;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease-out;
}

.form-submit:hover {
  background-color: #009f57;
}
</style>