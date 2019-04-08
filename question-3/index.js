
// eslint-disable-next-line no-unused-vars
const getAttributes = () => {
  const anchor = document.getElementById('w3r');
  const {
    href,
    hreflang,
    rel,
    target,
    type,
  } = anchor;

  const attributes = [href, hreflang, rel, target, type];
  // eslint-disable-next-line no-console
  console.log(attributes);
  return attributes;
};
