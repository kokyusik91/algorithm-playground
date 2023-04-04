function solution(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let 누적합 = 0;
  let answer = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    누적합 += array[i];
    answer += 누적합;
  }
  return answer;
}

console.log(solution([3, 1, 4, 3, 2]));
