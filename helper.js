/**
 * Swap Function
 * Swaps the position of two elements in an array using their indexes 
 * @param {array} input 
 * @param {number} i 
 * @param {number} j 
 */
const swap = (input, i, j) => {
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp;
};

module.exports = { swap };