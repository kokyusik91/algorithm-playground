// const solution = (data) => {
//   const sentence = data.trim();

//   return sentence.split(' ').length;
// };

// console.log(solution(' The first cha ract er is a blank'));
// let arr = Array.from(Array(4), () => new Array(5));
// console.log(arr);

const informations = [
  {
    propertyId: 23,
    contractId: 17,
    name: 'kyusikko',
  },
  {
    propertyId: 1,
    contractId: 14,
    name: 'panda',
  },
  {
    propertyId: 23,
    contractId: 5,
    name: 'whoishe',
  },
];

function extractDuplicateArray(array) {
  let targetArray = [];
  const set = new Set();
  array.forEach((item) => set.add(item.propertyId));

  for (let id of Array.from(set)) {
    let target = array.find((item) => item.propertyId === id);
    targetArray.push(target);
  }

  return targetArray;
}

console.log(extractDuplicateArray(informations));
