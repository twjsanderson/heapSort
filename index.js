const { iterativeHeapSort } = require('./iterative');
const { recursiveHeapSort } = require('./recursive');

// These arrays are sorted in place
let list1 = [2,3,4,5,6,3,4,5,10];
let list2 = [2,3,4,-5,6,3,4,5,-9];

iterativeHeapSort(list1);
// recursiveHeapSort(list2);

// Logging the lists after they have be sorted
console.log(list1);
// console.log(list2);
