const notSortedArray = require('./create_array')(10);
const notSortedArray_2 = [...notSortedArray];

// Start sorting array process
console.time('quick sort process with loop');

function quickSort(inputArray) {
    const number = inputArray.length;
    const array_1 = [];
    const array_2 = [];
    const instance = inputArray[0];
    for (let i = 1; i < number; i++) {
        if (inputArray[i] < instance) {
            array_1.push(inputArray[i]);
        } 
        else {
            array_2.push(inputArray[i]);
        }
     }
    return quickSort(array_1).concat(instance, quickSort(array_2));
}

quickSort(notSortedArray);

console.timeEnd('quick sort process with loop');

// Start sorting array process by native sort method
console.time('sort process with sort method');
notSortedArray_2.sort();
console.timeEnd('sort process with sort method');