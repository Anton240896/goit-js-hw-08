import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

const FEEDBACK_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(inputMessage, 500));
form.addEventListener('submit', submitMessage);

function inputMessage(evt) {
    const form_message = {
        email: emailInput.value,
        message: messageTextarea.value,
    }
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(form_message));
};

function loadMessage() {
    const form_message = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    if (form_message) {
        emailInput.value = formState.email;
        messageTextarea.value = formState.message;
    }
}
loadMessage();

function updateForm() {
    let form_message = localStorage.getItem('feedback-form-state');
    if (form_message) {
        const form_message = {
            email: emailInput.value,
            message: messageTextarea.value,
        } = JSON.parse(savedFormData) || {};
      emailInput.value =  form_message.email || '';
      messageTextarea.value = form_message.message || '';
    }
  }

function clearValue() {
    localStorage.removeItem(FEEDBACK_KEY);
    emailInput.value = '';
    messageTextarea.value = '';
}
updateForm();

function submitMessage(evt) {
    evt.preventDefault();
    const form_message = {
        email: emailInput.value,
        message: messageTextarea.value,
    }
    console.log(form_message);
    clearValue()
};
