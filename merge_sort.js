const notSortedArray = require('./create_array')(100000);
const notSortedArray_2 = [...notSortedArray];

const mergeSort = (array) => { 
  
    function merge(left, right) {
        const result = [];
        let il = 0;
        let ir = 0;
        while (il < left.length && ir < right.length){
            if (left[il] < right[ir]){
                result.push(left[il]);
                il++;
            }
            else {
                result.push(right[ir]);
                ir++;
            }
        }

      return result.concat(left.slice(il)).concat(right.slice(ir));
    }

    function sort(items) {
        if (items.length < 2){
            return items;
        } 
        const middle = Math.ceil(items.length / 2);
        const left = items.slice(0, middle);
        const right = items.slice(middle);
        return merge(sort(left), sort(right));
    }

    return sort(array);
};

// Start sorting array process
console.time('merge sort process');
mergeSort(notSortedArray);
console.timeEnd('merge sort process');

// Start sorting array process by native sort method
console.time('sort process with sort method');
notSortedArray_2.sort();
console.timeEnd('sort process with sort method');