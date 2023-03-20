const n = '1 1\n12 34\n5 500\n40 60\n1000 1000';

const solution = (string) => {
  let answer = '';
  const array = string.split('\n');

  for (let i = 0; i < array.length; i++) {
    const newArray = array[i].split(' ');
    answer += `${Number(newArray[0]) + Number(newArray[1])}` + '\n';
  }

  return answer;
};

console.log(solution(n));

// 1초 동안 100만번의 연산을 해야된다.
// 한꺼번에 문자열을 출력해야한다.

// 한줄마다 console.log()를 출력하면 많은 시간이 소요된다.
