var arr = [2, 3, 3,2, 4, 4, 6, 7, 7, 7];
var uniqueArray = [];
var n = arr.length;

// Iterate through each element in the array
for (var i = 0; i < n; i++) {
    var isDuplicate = false;

    // Check if the current element has already been added to the uniqueArray
    for (var j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
            isDuplicate = true;
            break;
        }
    }

    // If the element is not a duplicate, add it to uniqueArray
    if (!isDuplicate) {
        uniqueArray.push(arr[i]);
    }
    // console.log("unique array of i :", uniqueArray)
}

console.log("method 1 ",uniqueArray); // Output: [2, 3, 4, 6, 7]



/* -------------------------------------------------------------------------- */
/*                                  METHOD 2                                  */
/* -------------------------------------------------------------------------- */

function removeDuplicates(arr){
    let uniqueArray = [];

    for (let i=0; i < arr.length; i++) {
            if(uniqueArray.indexOf(arr[i])=== -1){
                uniqueArray.push(arr[i]);
            }
    }
    return uniqueArray;
}


const array = [2, 3, 3, 4, 4, 6, 7, 7, 7];
console.log("method 2: ", removeDuplicates(array)); // Output: [



/* -------------------------------------------------------------------------- */
/*                                  METHOD 3                                  */
/* -------------------------------------------------------------------------- */

function removeDuplicatesUsingSet(arr) {
    return [...new Set(arr)];
}

const array2 = [2, 3, 3, 2, 4, 4, 6, 7, 7, 7];
console.log("method 3: ", removeDuplicatesUsingSet(array2)); // Output: [2, 3, 4, 6, 7]
