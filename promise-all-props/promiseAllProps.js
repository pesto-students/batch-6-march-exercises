function promiseAllProps({ foo, bar }) {
  return Promise.all([foo, bar]).then((values) => {
    const obj = { foo: values[0], bar: values[1] };
    return obj;
  });
}

export { promiseAllProps };
