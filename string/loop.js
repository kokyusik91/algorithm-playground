const solution = (string, n) => {
  let answer = '';
  const array = string.split('');
  for (let i = 0; i < array.length; i++) {
    let middle = '';
    for (let j = 0; j < n; j++) {
      console.log(j);
      middle += array[i];
    }
    answer += middle;
  }

  return answer;
};

// ABC

console.log(solution('ABC', 3));
