
function parseMs(millisecs) {
  var day, hour, minute, seconds,  milliseconds;

  seconds = Math.floor(millisecs / 1000);
  milliseconds = millisecs % 1000;
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;

  return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds,
      milliseconds: milliseconds
  };
}

export {
  parseMs,
};
