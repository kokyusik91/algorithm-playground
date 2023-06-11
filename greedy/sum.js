// const solution = (total) => {
//   let count = 0;
//   let i = 1;
//   let array = [];
//   while (total > 0) {
//     total -= i;
//     array.push(i);
//     i++;
//     count++;

//     if (array.includes(total)) {
//       count + 1;
//       break;
//     }
//   }

//   return count;
// };

// console.log(solution(201));

const refactoring = (total) => {
  let sum = 0;
  let current = 0;

  while (sum <= total) {
    current += 1;
    sum += current;
  }

  return current - 1;
};

console.log(refactoring(11));
