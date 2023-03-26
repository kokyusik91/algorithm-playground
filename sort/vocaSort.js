const question =
  'but\ni\nwont\nhesitate\nno\nmore\nno\nmore\nit\ncannot\nwait\nim\nyours';

const solution = (string) => {
  const array = string.split('\n');
  const set = new Set(array);

  const compareFunc = (a, b) => {
    if (a.length === b.length) return a - b;
    else return a.length - b.length;
  };
  const duplicatedDeletedArray = [...set].sort(compareFunc).join('\n');
  return duplicatedDeletedArray;
};

console.log(solution(question));
