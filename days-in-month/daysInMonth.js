
function daysInMonth(year, month) {
  var date = new Date(year, month, 0);
  return date.getDate();
}

export {
  daysInMonth,
};
