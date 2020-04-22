const { swap } = require('./helper.js')

/**
 * Max Heap Function
 * Initiate and while loop that will continue infinitely unless ended somewhere inside the loop
 * Determines left & right child nodes (indexes in array) based on parent i
 * If left child index exists (is less than length of array) & left child value is greater than the parent value (max)
 * Update the max index to the left child index
 * If right child index exists (is less than length of array) & right child value is greater than the parent value (max)
 * Update the max index to the right child index
 * If an update has NOT taken place then i === max and we will exit the function
 * If an update has occured and i !== max, swap the values of index i and index max in the array
 * & update the value of i = max (which moves the i index to the child node on next loop)
 * @param {array} array 
 * @param {number} i 
 * @param {number} length
 */
const iterativeMaxHeap = (array, i, length) => {
    while (true) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let max = i;

        if (left < length && array[left] > array[max]) {
            max = left
        }

        if (right < length && array[right] > array[max]) {
            max = right
        }

        // Once this condition is met, exit the loop
        if (i === max) {
            break;
        }
        
        swap(array, i, max)
        i = max;
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
        iterativeMaxHeap(array, i, array.length)
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
const iterativeHeapSort = (array) => { 
    let len = array.length;

    // If the array doesn't have any values exit the function
    if (!len) {
        return;
    } 

    heapify(array);

    for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i)
        len--
        iterativeMaxHeap(array, 0, len)
    }
};

module.exports = { iterativeHeapSort, iterativeMaxHeap };
