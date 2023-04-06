const solution = (total) => {
  let target = total;
  let count = 0;
  let i = 0;
  const sugarList = [5, 3];

  while (true) {
    target -= 5;
    count++;
    if (target < 5) {
      target -= 3;
      count++;
      if (target === 0) {
        return count;
      }
      if (target < 0) {
        return -1;
      }
    }
    console.log(target);
  }
};

console.log(solution(6));
