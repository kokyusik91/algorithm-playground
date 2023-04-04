function solution(array) {
  // n^2을 쓰게되면 시간초과가 뜬다.
  // O(n) 까지만 가능.
  answer = '';
  const set = new Set(array);
  const sortedArray = [...set].sort((a, b) => a - b);
  const map = new Map();
  sortedArray.forEach((item, index) => {
    map.set(item, index);
  });

  for (x of array) {
    answer += map.get(x) + ' ';
  }
  return answer;

  // return answer.join(' ');
}

console.log(solution([2, 4, -10, 4, -9]));
