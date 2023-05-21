'use strict';

const HashTable = require('./index');

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
