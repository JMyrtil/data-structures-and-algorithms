class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }

    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey] = bucket[i];
      if (storedKey === key) {
        bucket[i] = [key, value];
        return;
      }
    }
    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if (storedKey === key) {
        return storedValue;
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey] = bucket[i];
      if (storedKey === key) {
        return true;
      }
    }

    return false;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      const bucket = this.table[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          const [storedKey] = bucket[j];
          keys.push(storedKey);
        }
      }
    }
    return keys;
  }
}

function repeatedWord(str) {
  const wordCount = {};
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (wordCount[word]) {
      return word;
    }

    wordCount[word] = 1;
  }

  return 'No repeated words found';
}

function leftJoin(hashTable1, hashTable2) {
  let result = [];

  for (let key of hashTable1.keys()) {
    let value1 = hashTable1.get(key);
    let value2 = hashTable2.get(key);
    value2 = value2 !== undefined ? value2 : null;
    result.push([key, value1, value2]);
  }

  return result;
}


module.exports = { Hashtable, repeatedWord, leftJoin };
