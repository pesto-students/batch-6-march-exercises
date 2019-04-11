
function blockScoping(index) {
  const callbacks = [];
  for (let i = 0; i <= 10; i += 1) {
    callbacks.push(() => {
      const a = i;
      return a;
    });
  }
  return callbacks[index]();
}

export {
  blockScoping,
};
