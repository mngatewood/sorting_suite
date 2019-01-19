const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')
const insertionSort = require('../insertionSort')

const unsortedArray = [5, 2, 7, 1, 3, 6, 4, 9, 8]
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('bubble sort', () => {
  
  it('should sort an array of numbers', () => {
    assert.deepEqual(bubbleSort(unsortedArray), sortedArray);
  })

})

describe('insertion sort', () => {

  it('should sort an array of numbers', () => {
    assert.deepEqual(insertionSort(unsortedArray), sortedArray);
  })

})

