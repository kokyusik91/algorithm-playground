const question = [100, 92, 17, 2, 5, 28, 2, 999, 230];

function solution(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    // temp는 처음 비교하는 숫자.
    console.log('minIndex', minIndex);
    let temp = array[i];
    // 더 작은 숫자.
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

console.log(solution(question));

// N은 총 3개이므로 이중 반복문도 쓸 수 있음.
