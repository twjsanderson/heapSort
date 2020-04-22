const { swap } = require('./helper.js');

/**
 * Recursive Max Heap Function
 * Determines left & right child nodes (indexes in array) based on parent i
 * If left child index exists (is less than length of array) & left child value is greater than the parent value (max)
 * Update the max index to the left child index
 * If right child index exists (is less than length of array) & right child value is greater than the parent value (max)
 * Update the max index to the right child index
 * If an update has taken place then i !== max 
 * We can then swap the values of the parent and its larger child value in the actual array
 * Then we call the recursiveMaxHeap again (recursively) for the new index at max (which is one of the children)
 * @param {array} array 
 * @param {number} i 
 * @param {number} length 
 */
const recursiveMaxHeap = (array, i, length) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < length && array[left] > array[max]) {
        max = left
    }

    if (right < length && array[right] > array[max]) {
        max = right
    }

    if (i !== max) {
        swap(array, i, max)
        recursiveMaxHeap(array, max, length)
    }
};

/**
 * Heapify Function
 * Runs the MaxHeap function moving backwards from the middle to the start of the array
 * @param {array} array 
 * @param {number} length
 */
const heapify = (array) => {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        recursiveMaxHeap(array, i, array.length)
    }
}

/**
 * Heap Sort Function
 * Runs the Max Heap function on the input array
 * Loops backwards through the array 
 * Swaps the value at i and the first value in the array      
 * Decrements the len of the input array (ignore the last value that was swapped)
 * Re-runs the Max Heap function with the updated length     
 * @param {array} array 
 */
const recursiveHeapSort = (array) => { 
    let len = array.length;

    // If the array doesn't have any values exit the function
    if (!len) {
        return;
    } 

    heapify(array);

    for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i)
        len--
        recursiveMaxHeap(array, 0, len)
    }
};

module.exports = { recursiveHeapSort, recursiveMaxHeap };