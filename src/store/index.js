import { reactive } from 'vue';

export const store = reactive({
  fields: {
    name: {
      label: 'Имя',
      value: '',
    },
    surname: {
      label: 'Фамилия',
      value: '',
    },
    phone: {
      label: 'Номер телефона',
      value: '',
    },
    email: {
      label: 'Email',
      value: '',
    },
    comment: {
      label: 'Комментарий',
      value: '',
    },
  }
});