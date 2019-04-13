function timeWas(timestamp, now = Date.now()) {
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  const timeDiff = now - timestamp;
  if (timeDiff < 5000) {
    return 'just now';
  }
  if (timeDiff >= YEARS) {
    return `${parseInt(timeDiff / YEARS, 10)} years ago`;
  }
  if (timeDiff >= MONTHS) {
    return `${parseInt(timeDiff / MONTHS, 10)} months ago`;
  }
  if (timeDiff >= WEEKS) {
    return `${parseInt(timeDiff / WEEKS, 10)} weeks ago`;
  }
  if (timeDiff >= DAYS) {
    return `${parseInt(timeDiff / DAYS, 10)} days ago`;
  }
  if (timeDiff >= HOURS) {
    return `${parseInt(timeDiff / HOURS, 10)} hours ago`;
  }
  if (timeDiff >= MINUTES) {
    if (parseInt(timeDiff / MINUTES, 10) === 1) {
      return `${parseInt(timeDiff / MINUTES, 10)} minute ago`;
    }
    return `${parseInt(timeDiff / MINUTES, 10)} minutes ago`;
  }
  if (timeDiff >= SECONDS) {
    return `${parseInt(timeDiff / SECONDS, 10)} seconds ago`;
  }
  return '';
}

export { timeWas };
