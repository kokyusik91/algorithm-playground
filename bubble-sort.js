const array = [2, 4, 6, 7, 1, 23, 21, 17, 22, 9];

const array2 = [2, 4, 6, 7, 1, 23, 21, 17, 22, 9];

// console.log(bubbleSort(array));

// function bubbleSort(arr) {
//   // 버블 정렬 횟수
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         // SWAP!!
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(advancedBubbleSort(array));

// function advancedBubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     // j가 반복할때마다 i - 1 값이 1씩 줄어든다 === 비교하는 횟수가 줄어든다.
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log('정렬 끝!');
//   }
//   return arr;
// }

console.log(moreAdvancedBubbleSort(array));

// 이미 거의 정렬된 상태일때는 큰 효과를 본다.
// 교환할게 없으면 반복문을 빠져나온다.
function moreAdvancedBubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    // j가 반복할때마다 i - 1 값이 1씩 줄어든다 === 비교하는 횟수가 줄어든다.
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    console.log('정렬 끝!');
  }
  return arr;
}
