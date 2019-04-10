
function timeWas(timeMS, now = Date.now()) {
  const timeElapsed = (now - timeMS) / 1000;
  const secondsIn = {
    MINUTE: 60,
    HOUR: 3600,
    DAY: 86400,
    WEEK: 604800,
    MONTH: 2592000,
    YEAR: 31104000,
  };

  if (timeElapsed >= secondsIn.YEAR) {
    const years = Math.floor(timeElapsed / secondsIn.YEAR);
    return `${years} years ago`;
  }

  if (timeElapsed >= secondsIn.MONTH) {
    const months = Math.floor(timeElapsed / secondsIn.MONTH);
    return `${months} months ago`;
  }

  if (timeElapsed >= secondsIn.WEEK) {
    const weeks = Math.floor(timeElapsed / secondsIn.WEEK);
    return `${weeks} weeks ago`;
  }

  if (timeElapsed >= secondsIn.DAY) {
    const days = Math.floor(timeElapsed / secondsIn.DAY);
    return `${days} days ago`;
  }

  if (timeElapsed >= secondsIn.HOUR) {
    const hours = Math.floor(timeElapsed / secondsIn.HOUR);
    return `${hours} hours ago`;
  }

  if (timeElapsed >= secondsIn.MINUTE) {
    const minutes = Math.floor(timeElapsed / secondsIn.MINUTE);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  if (timeElapsed >= 1) {
    return `${timeElapsed} seconds ago`;
  }

  if (timeElapsed < 1) {
    return 'just now';
  }
  return timeMS;
}

export {
  timeWas,
};
