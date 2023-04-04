function calculate(array, command) {
  const [i, j, k] = command;

  return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
}

function solution(array, commands) {
  let answer = [];
  commands.forEach((item) => {
    console.log(item);
    answer.push(calculate(array, item));
  });

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
