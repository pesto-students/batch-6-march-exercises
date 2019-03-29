
const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

function parseMs(milliseconds) {
  var obj = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }
  obj.days = parseInt(milliseconds / DAYS);
  milliseconds = milliseconds - obj.days * DAYS;

  obj.hours = parseInt(milliseconds / HOURS);
  milliseconds = milliseconds - obj.hours * HOURS;

  obj.minutes = parseInt(milliseconds / MINUTES);
  milliseconds = milliseconds - obj.minutes * MINUTES;

  obj.seconds = parseInt(milliseconds / SECONDS);
  milliseconds = milliseconds - obj.seconds * SECONDS;

  obj.milliseconds = milliseconds;

  return obj;
}

export {
  parseMs,
};
