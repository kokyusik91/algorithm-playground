const question = 'happy';

function check(data) {
  const setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 만약 다음 단어랑 다를때
    console.log(data[i], data[i + 1]);
    if (data[i] !== data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

console.log(check(question));
