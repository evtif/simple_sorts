const notSortedArray = require('./create_array')(10000);
const notSortedArray_2 = [...notSortedArray];

// Start sorting array process
console.time('buble sort process with loop');
const number = notSortedArray.length;

for (let i = 0; i < number; i++) {
  for (let j = 0; j < number - i - 1; j++) {
    if (notSortedArray[j] > notSortedArray[j + 1]) {
      let temp = notSortedArray[j];
      notSortedArray[j] = notSortedArray[j + 1];
      notSortedArray[j + 1] = temp;
    }
  }
}
console.timeEnd('buble sort process with loop');

// Start sorting array process by native sort method
console.time('sort process with sort method');
notSortedArray_2.sort();
console.timeEnd('sort process with sort method');
