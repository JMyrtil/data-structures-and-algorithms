'use strict';

const { HashTable, repeatedWord } = require('./index');

const tableSize = 1024;
const table = new HashTable(tableSize);

const hashOne = table.hash('John');
const hashTwo = table.hash('Alice');
const hashThree = table.hash('Bob');

describe('HashTable', () => {
  beforeEach(() => {
    table.set('John', 'Apple');
    table.set('Alice', 'Banana');
    table.set('Bob', 'Cherry');
  });

  it('should set a key/value in the hashtable and return true for existing keys', () => {
    expect(table.has('John')).toBeTruthy();
    expect(table.has('Ryan')).toBeFalsy();
  });

  it('should retrieve the correct value based on a key', () => {
    expect(table.get('John')).toEqual('Apple');
  });

  it('should return null for a key that does not exist in the hashtable', () => {
    expect(table.get('Ryan')).toEqual(null);
  });

  it('should return a list of all unique keys in the hashtable', () => {
    expect(table.keys()).toEqual(['John', 'Alice', 'Bob']);
  });

  it('should handle collisions within the hashtable', () => {
    table.set('nhoJ', 'Durian');
    expect(table.get('nhoJ')).toEqual('Durian');
  });

  it('should hash a key to an in-range value', () => {
    expect(hashOne).toBeLessThan(tableSize);
    expect(hashTwo).toBeLessThan(tableSize);
    expect(hashThree).toBeLessThan(tableSize);

    expect(hashOne).toBeGreaterThanOrEqual(0);
    expect(hashTwo).toBeGreaterThanOrEqual(0);
    expect(hashThree).toBeGreaterThanOrEqual(0);
  });
});

describe('repeatedWord', () => {
  it('should return the first repeated word in a string', () => {
    const input1 = 'Once upon a time, there was a brave princess who...';
    const input2 = 'It was the best of times, it was the worst of times, it was the age of wisdom...';
    const input3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs...';

    expect(repeatedWord(input1)).toBe('a');
    expect(repeatedWord(input2)).toBe('it');
    expect(repeatedWord(input3)).toBe('summer');
  });

  it('should return "No repeated words found" if no repeated words are found', () => {
    const input = 'This is a sample string without any repeated words';

    expect(repeatedWord(input)).toBe('No repeated words found');
  });
});
