
function sumAll(numbers) {
  let high;
  let low;
  if (numbers[0] > numbers[1]) {
    [high, low] = numbers;
  } else {
    [low, high] = numbers;
  }

  let sum = 0;
  for (let i = low; i <= high; i += 1) {
    sum += i;
  }

  return sum;
}

export {
  sumAll,
};
