var a = [34, 33, 4, 22, 6, 88];
let n = a.length;
let swapped;

do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
        if (a[i] > a[i + 1]) {
            // Swap a[i] and a[i + 1]
            [a[i], a[i + 1]] = [a[i + 1], a[i]];
            swapped = true;
        }
    }
    n--; // Reduce the range for the next pass
} while (swapped);

console.log(a);




/* -------------------------------------------------------------------------- */
/*                                  method 2                                  */
/* -------------------------------------------------------------------------- */



function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Last i elements are already in place
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no elements were swapped, the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(arr));

