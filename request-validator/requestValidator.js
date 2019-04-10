const validateRegex = regex => str => str.length === 0 || regex.test(str);

const requestRegexValidator = {
  method: { regex: /^(GET|POST|DELETE)$/, message: 'Invalid Method' },
  uri: { regex: /^((http|https):\/\/)?[a-zA-Z]*\.\w+.\w+(\/\w+)*\/?(.\w+)?$/, message: 'Invalid URI' },
  version: { regex: /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/, message: 'Invalid Version' },
  message: { regex: /^(\w|\s)+$/, message: 'Invalid Message' },
};

function requestValidator(requestObj) {
  const keys = Object.keys(requestRegexValidator);
  for (const key of keys) {
    const { regex, message } = requestRegexValidator[key];
    const requestObjValue = requestObj[key];
    if (requestObjValue === undefined || validateRegex(regex)(requestObjValue) === false) {
      throw new Error(`Invalid request header: ${message}`);
    }
  }
  return requestObj;
}

export {
  requestValidator,
};
