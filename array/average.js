const question =
  '5\n5 50 50 70 80 100\n7 100 95 90 80 70 60 50\n3 70 90 80\n3 70 90 81\n9 100 99 98 97 96 95 94 93 91';

const solution = (string) => {
  let answer = '';
  let amount = Number(string.split('\n')[0]);
  let rest = string.split('\n').slice(1, amount + 1);
  for (let i = 0; i < amount; i++) {
    const 학생수 = Number(rest[i].split(' ')[0]);
    const 점수배열 = rest[i]
      .split(' ')
      .slice(1, 학생수 + 1)
      .map((score) => Number(score));
    const 평균 = 점수배열.reduce((a, b) => a + b) / 학생수;

    let 특정학생 = 0;
    for (let j = 0; j < 학생수; j++) {
      if (점수배열[j] > 평균) {
        // 비율은 특정학생들 / 전체 학생수
        특정학생++;
      }
    }
    answer += `${((특정학생 / 학생수) * 100).toFixed(3)}%` + '\n';
  }
  return answer;
};

console.log(solution(question));
