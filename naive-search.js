const sol = '';
const pattern = 'omg';

console.log(naiveSearch(sol, pattern));

function naiveSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let subCount = 0;
    let k = 0;
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + k] === pattern[j]) {
        subCount++;
      } else break;
      if (subCount === pattern.length) count++;
      k++;
    }
  }

  return count;
}

//// 더 나은 버전
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch('lorie loled', 'lol');
