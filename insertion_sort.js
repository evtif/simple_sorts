const notSortedArray = require('./create_array')(10000);
const notSortedArray_2 = [...notSortedArray];

// Start sorting array process
console.time('insertion sort process with loop');
const number = notSortedArray.length;

for (let i = 0; i < number; i++) {
    let instance = notSortedArray[i];
    // let j = i - 1;
    // while (j >= 0 && notSortedArray[j] > instance) { 
    //     notSortedArray[j + 1] = notSortedArray[j];
    //     j--; 
    // }
    let j;
    for (j = i - 1; j >= 0 && notSortedArray[j] > instance; j--) { 
        notSortedArray[j + 1] = notSortedArray[j]; 
    }
    notSortedArray[j + 1] = instance;
}
console.timeEnd('insertion sort process with loop');

// Start sorting array process by native sort method
console.time('sort process with sort method');
notSortedArray_2.sort();
console.timeEnd('sort process with sort method');
    