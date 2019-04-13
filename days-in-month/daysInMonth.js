function daysInMonth(year, month) {
  const DAYS_IN_MONTH = {
    1: 31,
    2: year % 4 === 0 ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 30,
    11: 30,
    12: 31,
  };
  return DAYS_IN_MONTH[month];
}

export { daysInMonth };
