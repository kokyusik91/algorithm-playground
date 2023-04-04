const question = '21 Junkyu\n21 Dohyun\n20 Sunyoung';
function solution(string) {
  const file = string.split('\n');
  const newFile = file.map((item) => item.split(' '));
  return newFile
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .map((item) => item.join(' '))
    .join('\n');
}

console.log(solution(question));
