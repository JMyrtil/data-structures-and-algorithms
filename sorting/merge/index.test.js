const { mergeSort } = require('./index');

describe('mergeSort', () => {
  it('should sort the array in ascending order', () => {
    const arr = [5, 3, 1, 4, 2];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it('should handle an array with duplicate elements', () => {
    const arr = [4, 2, 1, 3, 2];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 2, 3, 4]);
  });
});
