// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const emailInput = document.querySelector('input[name="email"]');
// const messageTextarea = document.querySelector('textarea[name="message"]');

// const FEEDBACK_KEY = 'feedback-form-state';

// form.addEventListener('input', throttle(inputMessage, 500));
// form.addEventListener('submit', submitMessage);

// function inputMessage(evt) {
//     const form_message = {
//         email: emailInput.value,
//         message: messageTextarea.value,
//     }
//     localStorage.setItem(FEEDBACK_KEY, JSON.stringify(form_message));
// };

// function loadMessage() {
//     const form_message = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
//     if (form_message) {
//         emailInput.value = form_message.email;
//         messageTextarea.value = form_message.message;
//     }
// }
// loadMessage();

// function updateForm() {
//     let formData = localStorage.getItem('feedback-form-state');
//     if (formData) {
//         const form_message = {
//             email: emailInput.value,
//             message: messageTextarea.value,
//         } = JSON.parse(formData) || {};
//       emailInput.value =  form_message.email || '';
//       messageTextarea.value = form_message.message || '';
//     }
//   }

// function clearValue() {
//     localStorage.removeItem(FEEDBACK_KEY);
//     emailInput.value = '';
//     messageTextarea.value = '';
// }
// updateForm();

// function submitMessage(evt) {
//     evt.preventDefault();
//     const form_message = {
//         email: emailInput.value,
//         message: messageTextarea.value,
//     }
//     console.log(form_message);
//     clearValue()
// };



//solution2

const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state'

form.addEventListener('input', inputValue);
form.addEventListener('submit', submitValue);


let data = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) ?? {};
const {email,message} = form.elements;
email.value = data.email ?? '';
message.value = data.message ?? '';


function inputValue(evt) {
data[evt.target.name] = evt.target.value;
localStorage.setItem(FEEDBACK_KEY, JSON.stringify(data))    
}

function submitValue (evt) {
    evt.preventDefault();
    console.log(data);
    form.reset();
    localStorage.removeItem(FEEDBACK_KEY);
    data = {};
}