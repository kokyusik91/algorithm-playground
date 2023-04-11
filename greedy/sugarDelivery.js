const solution = (total) => {
  let target = total;
  let count = 0;
  let process = 0;

  if (target % 5 === 0) return target / 5;
  else {
    while (true) {
      process = target -= 3;
      count++;
      if (process % 5 === 0) {
        return process / 5 + count;
      }
      if (target === 0) return count;
      if (target < 0) return -1;
    }
  }
  // if (target % 3 === 0) return target / 3;
};

console.log(solution(11));

// 개선된  코드 방법

const refactoring = (total) => {
  let count = 0;
  let flag = false;
  // 값이 5로 나누어 떨어질 때까지 3을 뺀다.

  // 뺀값이 0이 되거나, 5로 나눠서 0이된다면 cnt를 더해주고 flag를 false로 바꾼다.
  while (total >= 0) {
    if (total === 0 || total % 5 === 0) {
      count += parseInt(total / 5);
      flag = true;
      return count;
    }

    total -= 3;
    count++;
  }

  if (!flag) {
    return -1;
  }
};

console.log('리팩토링 코드', refactoring(9));
