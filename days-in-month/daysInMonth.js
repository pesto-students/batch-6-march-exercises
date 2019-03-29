
function daysInMonth(year, month) {
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var isFeb = month - 1 === 1;
  var isLeapYearFeb = year % 4 === 0 && isFeb;
  if(isLeapYearFeb){
    return 29;
  }else{
    return monthDays[month-1];
  }




  
}

export {
  daysInMonth,
};
