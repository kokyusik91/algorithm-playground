const deleteOneNumber = (number) => {
  if (number / 10 >= 1) {
    return parseInt(number / 10);
  } else return number;
};

const solution = (a, b) => {
  let count = 1;
  let flag = false;

  while (b >= a) {
    if (a === b) {
      flag = true;
      break;
    }

    if (b % 2 === 0) {
      b = b / 2;
      count++;
    } else if (b % 10 === 1) {
      b = deleteOneNumber(b);
      count++;
    } else break;
  }

  if (flag) return count;
  else return -1;
};

console.log(solution(2, 162));
