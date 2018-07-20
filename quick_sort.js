const notSortedArray = require('./create_array')(10000);
const notSortedArray_2 = [...notSortedArray];

// Start sorting array process
console.time('quick sort process with loop');

function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {

    let index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

const arr = quickSort(notSortedArray, 0, notSortedArray.length - 1)
console.log(arr.slice(arr.length - 10, arr.length))
console.timeEnd('quick sort process with loop');

// Start sorting array process by native sort method
console.time('sort process with sort method');
let sortarr = notSortedArray_2.sort();
console.log(arr.slice(sortarr.length - 10, sortarr.length))
console.timeEnd('sort process with sort method');