
function ackermann({ ...values }) {
  if (values.m === 0) {
    return values.n + 1;
  }
  if (values.m > 0 && values.n === 0) {
    return ackermann({ m: values.m - 1, n: 1 });
  }
  return ackermann({ m: values.m - 1, n: ackermann({ m: values.m, n: values.n - 1 }) });
}

export {
  ackermann,
};
