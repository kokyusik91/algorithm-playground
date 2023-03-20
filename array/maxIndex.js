const solution = (array) => {
  let index = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
      index = i;
    }
  }

  return index + 1;
};

console.log(solution([3, 29, 38, 12, 57, 99, 40, 85, 61]));

let max = Math.max(...data);
console.log(input.indexOf(max) + 1);
