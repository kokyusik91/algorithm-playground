const array = [2, 4, 6, 7, 1, 23, 21, 17, 22, 9];

const array2 = [2, 4, 6, 7, 1, 23, 21, 17, 22, 9];

console.log(bubbleSort(array));

function bubbleSort(arr) {
  // 버블 정렬 횟수
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// j = 3 일때
// arr[3]  arr[4]
// 7      1
