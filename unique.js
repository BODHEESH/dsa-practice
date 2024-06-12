
// var array=[1,2,2,3]

// var array=['aaa','aaa','dfsdfs','ccc']
// let uniqueChar = [...new Set(array)]

// console.log(uniqueChar);


// Time Complexity: O(n)
// Space Complexity: O(n)



// function removeDuplicates(array) {
//     array.sort(); // Sort the array in lexicographical order
//     console.log(array.length,array);
//     let uniqueArray = [array[0]]; // Initialize the unique array with the first element
// console.log(uniqueArray,"iuhlijhk");
//     for (let i = 1; i < array.length; i++) {
//         // Compare the current element with the previous one
//         if (array[i] !== array[i - 1]) {
//             uniqueArray.push(array[i]); // If different, add it to the unique array
//         }
//     }

//     return uniqueArray;
// }

// var array = ['lllll','ttt','aaa', 'aaa', 'dfsdfs', 'ccc', 'aaa'];
// let uniqueChar2 = removeDuplicates(array);

// console.log(uniqueChar2);


// Time Complexity: O(n.log n)
// Space Complexity: O(n)



function removeDuplicates2(array) {
    let seen = {}; // Create an empty object to store seen elements
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        console.log(seen,"seen log")
        console.log(!seen[array[i]])
        if (!seen[array[i]]) { // Check if the element is not already seen
            uniqueArray.push(array[i]); // Add the element to the unique array
            seen[array[i]] = true; // Mark the element as seen
        }
    }

    return uniqueArray;
}

var array = ['aaa', 'aaa', 'dfsdfs', 'ccc'];
let uniqueChar3 = removeDuplicates2(array);

console.log(uniqueChar3);


// Time Complexity: O(n)
// Space Complexity: O(n)