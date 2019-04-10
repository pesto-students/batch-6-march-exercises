const getInvalidMessage = type => `Invalid request header: Invalid ${type}`;

function requestValidator(request) {
  const {
    method, uri, version, message,
  } = request;
  const validMethods = ['GET', 'POST', 'DELETE'];
  if (method === undefined || !validMethods.includes(method)) {
    throw new Error(getInvalidMessage('Method'));
  }
  const invalidUriPattern = /[^\da-z.]/i;
  if (uri === undefined || (uri.length === 1 && uri !== '*') || (invalidUriPattern.test(uri))) {
    throw new Error(getInvalidMessage('URI'));
  }
  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  if (version === undefined || !validVersions.includes(version)) {
    throw new Error(getInvalidMessage('Version'));
  }
  const invalidMessagePattern = /[<>\\&'"]/;
  if (message === undefined || invalidMessagePattern.test(message)) {
    throw new Error(getInvalidMessage('Message'));
  }
  return request;
}

export {
  requestValidator,
};
