/* eslint-disable no-unused-vars */
const getFormvalue = () => {
  const form = document.querySelector('#form1');
  const formData = new FormData(form);
  const firstName = formData.get('fname');
  const lastName = formData.get('lname');
  return {
    firstName,
    lastName,
  };
};
