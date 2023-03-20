const solution = (array) => {
  const set = new Set();
  array.forEach((item) => {
    set.add(item % 42);
  });
  console.log(set);
  return set.size;
};

console.log(solution([105, 88, 92, 215, 77, 193, 202, 8, 9, 10]));
