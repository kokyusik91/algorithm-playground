const array = [5, 23, 4, 27, 3, 99];

console.log(insertionSort(array));

function insertionSort(arr) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      console.log('End!!');
    }
  }
  return arr;
}
