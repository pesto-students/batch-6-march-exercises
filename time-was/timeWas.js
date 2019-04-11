
const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = DAYS * 30;
const YEARS = MONTHS * 12;

function timeWas(timeStamp, currentTimeStamp = Date.now()) {
  let timeDifference = currentTimeStamp - timeStamp;
  if (timeDifference < 5000) {
    return 'just now';
  }

  let timeWasString = '';

  if (timeDifference >= YEARS) {
    timeWasString += `${parseInt(timeDifference / YEARS, 10)} years `;
    timeDifference %= YEARS;
  } else if (timeDifference >= MONTHS) {
    timeWasString += `${parseInt(timeDifference / MONTHS, 10)} months `;
    timeDifference %= MONTHS;
  } else if (timeDifference >= WEEKS) {
    timeWasString += `${parseInt(timeDifference / WEEKS, 10)} weeks `;
    timeDifference %= WEEKS;
  } else if (timeDifference >= DAYS) {
    timeWasString += `${parseInt(timeDifference / DAYS, 10)} days `;
    timeDifference %= DAYS;
  } else if (timeDifference >= HOURS) {
    timeWasString += `${parseInt(timeDifference / HOURS, 10)} hours `;
    timeDifference %= HOURS;
  } else if (timeDifference >= MINUTES) {
    const secs = parseInt(timeDifference / MINUTES, 10);
    timeWasString += `${secs} minute${secs > 1 ? 's' : ''} `;
    timeDifference %= MINUTES;
  } else if (timeDifference >= 5000) {
    timeWasString += `${parseInt(timeDifference / SECONDS, 10)} seconds `;
    timeDifference %= SECONDS;
  }
  return `${timeWasString}ago`;
}

export {
  timeWas,
};
