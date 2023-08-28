import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const saveForm = throttle(() => {
  const textInput = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(textInput));
}, 500);

const loadForm = () => {
  const storedForm = localStorage.getItem('feedback-form-state');
  if (storedForm) {
    const parsedForm = JSON.parse(storedForm);
    emailInput.value = parsedForm.email;
    messageInput.value = parsedForm.message;
  }
};

emailInput.addEventListener('input', saveForm);
messageInput.addEventListener('input', saveForm);

feedbackForm.addEventListener('submit', e => {
  const storedForm = localStorage.getItem('feedback-form-state');
  if (storedForm) {
    localStorage.removeItem('feedback-form-state');
  }
  emailInput.value = '';
  messageInput.value = '';
  e.preventDefault();
});
