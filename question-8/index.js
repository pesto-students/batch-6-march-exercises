const selectElements = document.getElementById('mySelect');

// eslint-disable-next-line no-unused-vars
const getOptions = () => {
  const selectNodes = [...selectElements.childNodes];
  const optionElements = selectNodes.filter(elm => elm.nodeName === 'OPTION');
  const options = optionElements.reduce((acc, elm) => `${acc} ${elm.innerText}`, '');
  // eslint-disable-next-line no-alert
  alert(options);
  return options;
};
