const assert = require('assert');
const { swap } = require('../helper');
const { iterativeHeapSort, iterativeMaxHeap } = require('../iterative');
const { recursiveHeapSort, recursiveMaxHeap } = require('../recursive');

describe('Iterative Implementation', () => {
  describe('iterativeHeapSort Function', () => {
    it('should sort an unsorted array', () => {
      let array1 = [3,2,1],
        array2 = [3,4,33,1,4],
        array3 = [-1,0,500,9,2,-20],
        array4 = [-1,0,4,3,5,6],
        array5 = [4,5,3,3,3,3,3];

      iterativeHeapSort(array1)
      assert.deepStrictEqual(array1, [1,2,3]);
      iterativeHeapSort(array2)
      assert.deepStrictEqual(array2, [1,3,4,4,33]);
      iterativeHeapSort(array3)
      assert.deepStrictEqual(array3, [-20,-1,0,2,9,500]);
      iterativeHeapSort(array4)
      assert.deepStrictEqual(array4, [-1,0,3,4,5,6]);
      iterativeHeapSort(array5)
      assert.deepStrictEqual(array5, [3,3,3,3,3,4,5]);
    });
    it('should keep a sorted array sorted', () => {
      let array1 = [1,2,3],
        array2 = [1,3,4,4,33],
        array3 = [-20,-1,0,2,9,500];

      iterativeHeapSort(array1)
      assert.deepStrictEqual(array1, [1,2,3]);
      iterativeHeapSort(array2)
      assert.deepStrictEqual(array2, [1,3,4,4,33]);
      iterativeHeapSort(array3)
      assert.deepStrictEqual(array3, [-20,-1,0,2,9,500]);
    });
    it('should keep and empty array empty', () => {
      let array1 = [];
      
      iterativeHeapSort(array1)
      assert.deepStrictEqual(array1, []);
    });
  });
  describe('iterativeMaxHeap Function', () => {
    it('should convert an unsorted array with 3 elements into a valid Max Heap', () => {
      let array1 = [5,15,9],
        array2 = [11,12,10],
        array3 = [3,5,4];

      iterativeMaxHeap(array1, 0, array1.length);
      assert.deepStrictEqual(array1, [15,5,9]);
      iterativeMaxHeap(array2, 0, array2.length);
      assert.deepStrictEqual(array2, [12,11,10]);
      iterativeMaxHeap(array3, 0, array3.length);
      assert.deepStrictEqual(array3, [5,3,4]);
    });
    it('should convert an unsorted array with 5 elements into a partially completed Max Heaps', () => {
      let array1 = [5,4,9,7,15],
        array2 = [11,12,10,9,15];

      iterativeMaxHeap(array1, 0, array1.length);
      assert.deepStrictEqual(array1, [9,4,5,7,15]);
      iterativeMaxHeap(array2, 0, array2.length);
      assert.deepStrictEqual(array2, [12,15,10,9,11]);
    });
  });
});

describe('Recursive Implementation', () => {
  describe('recursiveHeapSort Function', () => {
    it('should sort an unsorted array', () => {
      let array1 = [3,2,1],
        array2 = [3,4,33,1,4],
        array3 = [-1,0,500,9,2,-20],
        array4 = [-1,0,4,3,5,6],
        array5 = [4,5,3,3,3,3,3];

      recursiveHeapSort(array1)
      assert.deepStrictEqual(array1, [1,2,3]);
      recursiveHeapSort(array2)
      assert.deepStrictEqual(array2, [1,3,4,4,33]);
      recursiveHeapSort(array3)
      assert.deepStrictEqual(array3, [-20,-1,0,2,9,500]);
      recursiveHeapSort(array4)
      assert.deepStrictEqual(array4, [-1,0,3,4,5,6]);
      recursiveHeapSort(array5)
      assert.deepStrictEqual(array5, [3,3,3,3,3,4,5]);
    });
    it('should keep a sorted array sorted', () => {
      let array1 = [1,2,3],
        array2 = [1,3,4,4,33],
        array3 = [-20,-1,0,2,9,500];

      recursiveHeapSort(array1)
      assert.deepStrictEqual(array1, [1,2,3]);
      recursiveHeapSort(array2)
      assert.deepStrictEqual(array2, [1,3,4,4,33]);
      recursiveHeapSort(array3)
      assert.deepStrictEqual(array3, [-20,-1,0,2,9,500]);
    });
    it('should keep and empty array empty', () => {
      let array1 = [];

      recursiveHeapSort(array1)
      assert.deepStrictEqual(array1, []);
    });
  });
  describe('recursiveMaxHeap Function', () => {
    it('should convert an unsorted array with 3 elements into a valid Max Heap', () => {
      let array1 = [5,15,9],
        array2 = [11,12,10],
        array3 = [3,5,4]

      recursiveMaxHeap(array1, 0, array1.length);
      assert.deepStrictEqual(array1, [15,5,9]);
      recursiveMaxHeap(array2, 0, array2.length);
      assert.deepStrictEqual(array2, [12,11,10]);
      recursiveMaxHeap(array3, 0, array3.length);
      assert.deepStrictEqual(array3, [5,3,4]);
    });
    it('should convert an unsorted array with 5 elements into a partially completed Max Heaps', () => {
      let array1 = [5,4,9,7,15],
        array2 = [11,12,10,9,15];

      recursiveMaxHeap(array1, 0, array1.length);
      assert.deepStrictEqual(array1, [9,4,5,7,15]);
      recursiveMaxHeap(array2, 0, array2.length);
      assert.deepStrictEqual(array2, [12,15,10,9,11]);
    });
  });
});

describe('swap Function', () => {
  it('should swap the values in an array with only 2 elements', () => {
    let array1 = [2,1],
      array2 = [1,2],
      array3 = [2,0],
      array4 = [2,2];

    swap(array1,0,1);
    assert.deepStrictEqual(array1, [1,2]);
    swap(array1,1,0);
    assert.deepStrictEqual(array1, [2,1]);
    swap(array2,0,1);
    assert.deepStrictEqual(array2, [2,1]);
    swap(array2,1,0);
    assert.deepStrictEqual(array2, [1,2]);
    swap(array3,0,1);
    assert.deepStrictEqual(array3, [0,2]);
    swap(array4,0,1);
    assert.deepStrictEqual(array4, [2,2]);
  });
  it('should swap the values in an array with more than 2 elements', () => {
    let array1 = [2,1,0,4,-2],
      array2 = [3,4,5,6,6,7,7,8,8];

    swap(array1,0,array1.length - 1);
    assert.deepStrictEqual(array1, [-2,1,0,4,2]);
    swap(array1,1,array1.length - 3);
    assert.deepStrictEqual(array1, [-2,0,1,4,2]);
    swap(array2,2,5);
    assert.deepStrictEqual(array2, [3,4,7,6,6,5,7,8,8]);
    swap(array2,0,8);
    assert.deepStrictEqual(array2, [8,4,7,6,6,5,7,8,3]);
  });
});
