
let errorName = ''; // eslint-disable-line import/no-mutable-exports

try {
  setMe; // eslint-disable-line
} catch (error) {
  errorName = error.name;
}

export {
  errorName,
};
