function daysInMonth(year, month) {
  var isLeapYear = year % 4 == 0;

  var monthDayMap = {
    1: 31,
    2: isLeapYear ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };
  return monthDayMap[month];
}

export { daysInMonth };
