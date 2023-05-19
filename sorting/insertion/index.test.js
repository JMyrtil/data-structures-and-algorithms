const { insertionSort } = require('./index');

describe('insertionSort', () => {
  it('should sort the array in ascending order', () => {
    const arr = [5, 3, 1, 4, 2];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([]);
  });
});
