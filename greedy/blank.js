const string = '55-50+40';

const solution = (text) => {
  let answer = 0;
  let array = text.split('-');
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    let 각합 = array[i]
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b);
    if ((i = 0)) answer += 각합;
    else answer -= 각합;
  }
  return answer;
};

console.log(solution('55-50+40'));

// + 만있을때는

// - 만 있을때는 오름차순으로 정렬해서 마이너스를 한다.

// + - 섞여있을때는 내림차순으로 정렬하여
