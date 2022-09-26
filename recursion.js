// function factorial(number) {
//   if (number === 1) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// }

// console.log(factorial(3));

// // factorial(6);
// // return 6 * 5 * 4 * 3 * 2 * 1;

// function power(num1, num2) {
//   if (num2 === 0) return 1;

//   return num1 * power(num1, num2 - 1);
// }

// power(2, 4);
//     return 2 * power(2, 3);
//                   return 2 * power(2, 2)
//                                 return 2 * power(2, 1)
//                                               return 2 * power(2, 0)

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// helper method

// function productOfArray(arr) {
//   let total = 1;

//   function helper(arr) {
//     if (arr.length === 0) return;

//     total = total * arr.shift();
//     helper(arr);
//   }

//   helper(arr);

//   return total;
// }

// console.log(
//   productOfArray([1, 2, 3, 10, 2, 4, 5, 66, 63, 4, 4, 5, 10, 11, 23, 45]),
// );

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// function recursiveRange(num) {
//   if (num === 0) return 0;

//   return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(5));

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 1, 1, 2, 3, 5, 8;
// function fib(num) {
//   if (num === 0) return 0;
//   if (num === 1) return 1;

//   return fib(num - 2) + fib(num - 1);
// }

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const str = 'awesome';

function reverse(str) {
  const strArray = str.split('');
  let newStr = '';

  function helper(arr) {
    if (arr.length === 0) return;

    newStr = newStr + arr.pop();
    helper(arr);
  }

  helper(strArray);

  if (str !== newStr) return false;

  return true;
}

console.log(reverse('amanaplanacanalpanama'));
