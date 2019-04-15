/* eslint-disable */
let value = '';

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);

const formData = new FormData();

const utf8_value = document.querySelector('input[name=utf8]').value;
formData.append('utf8', utf8_value);
