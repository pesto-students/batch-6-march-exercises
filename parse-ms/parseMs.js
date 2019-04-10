
function parseMs(milliseconds) {
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return {
    days: Math.trunc(days),
    hours: Math.trunc(hours % 24),
    minutes: Math.trunc(minutes % 60),
    seconds: Math.trunc(seconds % 60),
    milliseconds: Math.trunc(milliseconds % 1000),
  };
}

export {
  parseMs,
};
