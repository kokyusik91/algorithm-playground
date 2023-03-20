const solution = (scores) => {
  let answer = '';

  const max = Math.max(...scores);
  let total = 0;
  scores.forEach((score) => (total += (score / max) * 100));
  const average = total / scores.length;

  return average;
};

console.log(solution([10, 20, 30, 40, 50, 60, 70, 80, 90]));
