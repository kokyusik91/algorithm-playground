function solution(string) {
  let answer = '';
  const obj = {};
  for (letter of string) {
    if (letter in obj) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  const keys = Object.keys(obj)
    .map((item) => parseInt(item))
    .sort((a, b) => b - a)
    .map((item) => String(item));
  console.log(keys);

  for (let i = 0; i < keys.length; i++) {
    answer += keys[i].repeat(obj[keys]);
  }
  return answer;
}

console.log(solution('61423'));
