const form = document.getElementById('form1');

const formData = new FormData(form);

// eslint-disable-next-line no-unused-vars
const getFormValue = () => {
  const names = {
    firstName: formData.get('fname'),
    lastName: formData.get('lname'),
  };
  return names;
};
