import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

email.setAttribute('required', 'required');
message.setAttribute('required', 'required');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};
form.addEventListener('input', throttle(saveFormValue, 500));
form.addEventListener('submit', submitForm);

let data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
// console.log('data', data);
try {
  email.value = data.email || '';
  message.value = data.message || '';
} catch (error) {
  console.log('empty storage');
}

function saveFormValue(event) {
  if (data) {
    formData = data;
  }
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
function submitForm(event) {
  console.log(formData);
  event.preventDefault();
  localStorage.clear();
  event.target.reset();
  data = {};
}
