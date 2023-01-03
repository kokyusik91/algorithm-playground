function hash(text, arrayLength) {
  let total = 0;
  for (let char of text) {
    let value = char.charCodeAt(0) - 96;
    total = (value + total) % arrayLength;
  }

  return total;
}

/**
 * 개선된 hash 함수
 */
function advancedHash(text, arrayLength) {
  let total = 0;
  let WEIRD_PRIME = 31;
  // 100개 이상의 글자가 오면 100번까지만 반복문
  for (let i = 0; i < Math.min(text.length, 100); i++) {
    let char = text[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }

  return total;
}

const value = hash('pink', 10);
const advancedValue = advancedHash('pink', 11);

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  _hash(text) {
    let total = 0;
    let WEIRD_PRIME = 31;
    // 100개 이상의 글자가 오면 100번까지만 반복문
    for (let i = 0; i < Math.min(text.length, 100); i++) {
      let char = text[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }
}

const hashTable = new HashTable();
hashTable.set('hello', 'nigro');
hashTable.set('hell', 'goto');
hashTable.set('mr', 'spiderman');

console.log('맵!', hashTable.keyMap);
