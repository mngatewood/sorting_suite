const insertionSort = array => {
  let sortedArray = [];

  for (let i = 0; array.length > 0; i) {
    sortedArray.push(array[0]);
    array.shift();
    for (let j = sortedArray.length - 1; j > 0; j--) {
      if (sortedArray[j] < sortedArray[j - 1]) {
        [sortedArray[j - 1], sortedArray[j]] =
          [sortedArray[j], sortedArray[j - 1]];
      }
    }
  }
  return sortedArray;
}

module.exports = insertionSort