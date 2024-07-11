const binarySearch = (list, target) => {
  let left = 0
  let right = list.length;
  let index = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (list[middle] === target) {
      index = middle;
      break;
    }

    if (list[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return index
}

module.exports = binarySearch;