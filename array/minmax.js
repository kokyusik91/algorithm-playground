const solution = (n) => {
  const question = n.split('\n');
  const amount = Number(question[0]);
  const array = question[1].split(' ').map((item) => Number(item));

  let answer = '';
  let max = -1000001;
  let min = 1000001;

  for (let i = 0; i < amount; i++) {
    // 만약에 max로 설정한 -10000보다 크면 max를 그 수로 교체해준다.
    if (max < array[i]) max = array[i];

    if (min > array[i]) min = array[i];
  }

  // reduce를 사용한다.
  // let minValue = array.reduce((a, b) => Math.min(a, b));
  // let maxValue = array.reduce((a, b) => Math.max(a, b));

  answer = `${min} ${max}`;
  return answer;
};

const question = `5\n20 1199 35 -999 7`;

console.log(solution(question));
