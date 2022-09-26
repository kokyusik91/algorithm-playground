const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];

function binarySearch(array, target) {
  // 포인터 총 3개 정하기
  let start = 0;
  let end = array.length - 1;
  let medium = Math.floor((start + end) / 2);
  //
  while (array[medium] !== target && start <= end) {
    console.log(start, medium, end);
    if (array[medium] > target) {
      end = medium - 1;
    } else {
      start = medium + 1;
    }
    // 새로운 중간값 형성
    medium = Math.floor((start + end) / 2);
  }

  if (target === array[medium]) return medium;
  else return -1;
}

console.log(binarySearch(arr, 22));
