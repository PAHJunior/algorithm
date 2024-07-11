const binarySearch = require('./main');


describe('binary search', () => {
  test('the element to be searched is exactly in the middle of the array', () => {
    const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
    expect(index).toBe(4);
  });

  test('The element to be searched is at the beginning of the array', () => {
    const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
    expect(index).toBe(0);
  });

  test('The element to be searched is at the beginning of the array', () => {
    const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
    expect(index).toBe(8);
  });

  test('The element to be searched is not present in the array', () => {
    const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 
    expect(index).toBe(-1);
  });

  test('should handle large arrays efficiently', () => {
    const arr = Array.from({ length: 1e6 }, (_, i) => i + 1);
    const target = 999999;
    expect(binarySearch(arr, target)).toBe(999998);
  });
});