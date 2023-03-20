const n = 9;

const solution = (number) => {
  let answer = '';
  for (let i = 1; i < 10; i++) {
    answer += `${number} * ${i} = ${number * i}` + '\n';
  }

  return answer;
};

console.log(solution(5));
