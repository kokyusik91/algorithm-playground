const array2 = [5, 23, 4];

console.log(selectionSort(array2));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 최소값의 위치를 기억한다.
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        console.log(min);
      }
      // i기 min과 다를때
      if (i !== min) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
  }
  return arr;
}
