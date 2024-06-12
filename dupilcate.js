/* -------------------------------------------------------------------------- */
/*                                  method 1                                  */
/* -------------------------------------------------------------------------- */

var x = 4;
var arr = [2, 3, 3, 4, 4, 6, 7, 7, 7]
n = arr.length
var flag = 0;

for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
        if (arr[i] == arr[j]) {
            flag = 1;
        }
    }
    if (flag == 1) {
        console.log("repeat element 11111 \n" + arr[i]);
        flag = 0;
    }
}



/* -------------------------------------------------------------------------- */
/*                                  method 2                                  */
/* -------------------------------------------------------------------------- */


var x = 4;
var arr = [2, 3, 3, 4, 4, 6, 7, 7, 7];
n = arr.length;
var flag = 0;

for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
        if (arr[i] == arr[j]) {
            flag = 1;
        }
    }
    if (flag == 1) {
        console.log("repeat element 2222 \n" + arr[i]);
        flag = 0;
    }
}


// Original Code: Time complexity O(n^2), space complexity O(1).
// Optimized Code: Time complexity O(n), space complexity O(n).


var arr = [2, 3, 3, 4, 4, 6, 7, 7];
var seen = new Set();
var duplicates = new Set();

for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
        duplicates.add(arr[i]);
    } else {
        seen.add(arr[i]);
    }
}

duplicates.forEach(duplicate => {
    console.log("repeat element 3333 \n" + duplicate);
});






