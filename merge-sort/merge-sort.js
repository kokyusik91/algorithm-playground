import merge2 from './merge2.js';

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge2(left, right);
}

console.log(mergeSort([2, 7, 11, 4, 55, 17, 52, 199, 6]));
