/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
let errorName;
try {
  const a = b;
} catch (e) {
  errorName = e.name;
}

export { errorName };
