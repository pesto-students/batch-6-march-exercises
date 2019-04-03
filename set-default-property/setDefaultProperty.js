hasValue = (prop, obj) => (prop in obj) ? obj[prop]: 'defaultValue'; 

const handler = {
  get (obj, prop){
    return hasValue(prop, obj);
  }
}

const setDefaultProperty = new Proxy(obj, handler);

export {
  setDefaultProperty,
};
