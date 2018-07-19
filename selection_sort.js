const notSortedArray = require('./create_array')(10000);
const notSortedArray_2 = [...notSortedArray];

// Start sorting array process
console.time('selction sort process with loop');
const number = notSortedArray.length;

for (let i = 0; i < number - 1; i++) {
  let min = i;
  for (let j = i + 1; j < number; j++) {
    if (notSortedArray[min] > notSortedArray[j]) {
      min = j;
    }
  }
  let temp = notSortedArray[min];
  notSortedArray[min] = notSortedArray[i];
  notSortedArray[i] = temp;
}
console.timeEnd('selction sort process with loop');

// Start sorting array process by native sort method
console.time('sort process with sort method');
notSortedArray_2.sort();
console.timeEnd('sort process with sort method');
