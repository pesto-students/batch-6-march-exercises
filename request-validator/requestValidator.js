
function requestValidator(request) {
  
    var method = {
      validator: /^[GET|POST|DELETE]+$/,
      errorMessage: 'Invalid request header: Invalid Method'
    }
    var URI = {
      validator: /^[\w\.\*]+$/,
      errorMessage: 'Invalid request header: Invalid URI'
    }
    var version = {
      validator: /^HTTP\/\d\.\d$/,
      errorMessage:'Invalid Header' 
    }

    if(!method.validator.test(request.method)){
      throw new Error(method.errorMessage);
    }

    if(!URI.validator.test(request.uri)){
      throw new Error(URI.errorMessage);
    }

    if(!version.validator.test(request.version)){
      throw new Error(version.errorMessage);
    }

    var emptyMessage = !request.hasOwnProperty('message')

    if(emptyMessage){
      throw new Error('Invalid request header: Invalid Message')
    }
  return request;
}

export {
  requestValidator,
};
