const solution = (string, n) => {
  let answer = '';
  const array = string.split('');
  for (let i = 0; i < array.length; i++) {
    let middle = '';
    middle = array[i].repeat(n);
    // 문자열 붙이는것
    answer += middle;
  }

  return answer;
};

// ABC
console.log(solution('ABC', 3));

const newArray = new Array(5).fill(-1);
console.log('newArray', newArray);

// console.log('고규식'.repeat(5));
