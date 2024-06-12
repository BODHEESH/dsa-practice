// function merge(left, right) {
  //   let sortedArr = [] // the sorted items will go here
  //   while (left.length && right.length) {
  //     // Insert the smallest item into sortedArr
  //     if (left[0] < right[0]) {
  //       sortedArr.push(left.shift())
  //     } else {
  //       sortedArr.push(right.shift())
  //     }
  //   }
  //   // Use spread operators to create a new array, combining the three arrays
  //   return [...sortedArr, ...left, ...right]
  // }
  
  // let a=merge([1, 4], [2, 6, 9]) // [1, 2, 4, 6, 9]

  // console.log(a);














function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", mergeSort(arr));
