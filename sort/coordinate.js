const question = '3 4\n9 1\n9 -99\n22 2\n17 3';

function solution(string) {
  const array = string
    .split('\n')
    .map((item) => item.split(' ').map((item) => Number(item)));

  return array
    .sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      else return a[0] - b[0];
    })
    .join('\n');
}

console.log(solution(question));
