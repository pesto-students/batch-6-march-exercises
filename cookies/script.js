const formData = new FormData();

const utf8Value = document.querySelector('input[name=utf8]').value;
formData.append('utf8', utf8Value);

const authToken = document.querySelector('input[name=authenticity_token]').value;
formData.append('authenticity_token', authToken);

fetch('https://github.com/logout', {
  method: 'POST',
  body: formData,
}).then(res => { location.reload(); });
