// const solution = () => {
//   let answer = '';

//   return answer;
// };

// console.log(solution([1, 5, 10, 50, 100, 500, 1000]));

// 4200

// 4200 - 1000 - 1000 - 1000 - 1000 - 100 - 100

function solution() {
  let array = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];
  let target = 4790;
  let i = array.length - 1;
  let count = 0;

  while (true) {
    if (target - array[i] < 0) {
      i--;
    } else {
      target -= array[i];
      count++;
    }

    if (target === 0) {
      return count;
    }
  }
}

console.log(solution());
