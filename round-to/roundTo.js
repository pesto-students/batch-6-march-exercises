
function roundTo(number, decimals) {
  const paddedRoundNum = Math.round(`${number}e${decimals}`);
  if (Number.isInteger(number) && decimals >= 0) {
    return number;
  }
  return Number(`${paddedRoundNum}e${-decimals}`);
}

roundTo.up = (number, decimals) => {
  const paddedRoundNum = Math.ceil(`${number}e${decimals}`);
  return Number(`${paddedRoundNum}e${-decimals}`);
};

roundTo.down = (number, decimals) => {
  const paddedRoundNum = Math.floor(`${number}e${decimals}`);
  return Number(`${paddedRoundNum}e${-decimals}`);
};

export {
  roundTo,
};
