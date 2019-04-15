
function parseMs(milliseconds) {
  let remaining = milliseconds;
  const msInADay = 24 * 60 * 60 * 1000;
  const days = Math.floor(remaining / msInADay);
  remaining -= msInADay * days;
  const msInAnHour = 60 * 60 * 1000;
  const hours = Math.floor(remaining / msInAnHour);
  remaining -= msInAnHour * hours;
  const msInAMinute = 60 * 1000;
  const minutes = remaining % msInAMinute;
  remaining -= msInAMinute * minutes;
  const msInASecond = 1000;
  const seconds = remaining % msInASecond;
  remaining -= msInASecond * seconds;
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds: remaining,
  };
}

export {
  parseMs,
};
