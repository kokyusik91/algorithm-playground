function merge2(arr1, arr2) {
  let result = [];
  let firstArrayIndex = 0;
  let secondArrayIndex = 0;

  // 요소의 갯수가 같을때 까지만 적용되는 while문
  while (firstArrayIndex < arr1.length && secondArrayIndex < arr2.length) {
    if (arr1[firstArrayIndex] > arr2[secondArrayIndex]) {
      result.push(arr2[secondArrayIndex]);
      secondArrayIndex++;
    } else {
      result.push(arr1[firstArrayIndex]);
      firstArrayIndex++;
    }
  }

  // 첫번째 배열에서 남은게 있다면? 다 넣는다.
  while (firstArrayIndex < arr1.length) {
    result.push(arr1[firstArrayIndex]);
    firstArrayIndex++;
  }
  // 두번째 배열에서 남은게 있다면? 다 넣는다.
  while (secondArrayIndex < arr2.length) {
    result.push(arr2[secondArrayIndex]);
    secondArrayIndex++;
  }
  return result;
}

export default merge2;
