/* -------------------------------------------------------------------------- */
/*                             Duplicate elements                             */
/* -------------------------------------------------------------------------- */

// const array = [1, 2, 1, 3, 4, 3, 5, 5,1,1];
const str = ['a','m','e','e','e','n']
// let flag = 0;
// for (let i = 0; i < array.length; i++) {
//   for (let j =i+1; j < array.length; j++) {
//     if (array[i] === array[j]) {
//       flag++;
//     }
//   }
//   if (flag) {
//     console.log("Repeated element is", array[i]);
//     flag = 0;
//   }
// }


// let uniqueChar = [...new Set(array)]

// if(!uniqueChar){
//     let dup = uniqueChar
//     console.log(dup);
// }

// let a = new Set(array)

// console.log(uniqueChar);

// console.log(uniqueChar);


// for(let i =0;i<5;i++){
//     console.log("hey");
// }

// let i =0
// while(i<5){
//     console.log("buddy");
//     i++;
// }

// let y = "5a";      
// let x = + y;   

// console.log(x);
// console.log(typeof(x));
// "use strict"
// let interface = 5;
// console.log(interface);

// function sum(num){
//     if(num >5){
//         return;
//     }
//     console.log(num);
//     sum(num+1);
// }

// sum(1)


	// Javascript code to find
	// duplicates in O(n) time
	let numRay = [ 0, 4, 3, 2, 7, 8, 2, 3, 1 ];
	// let arr_size = numRay.length;
    // console.log(arr_size,"size");
	
	// // count the frequency
	// for (let i = 0; i < arr_size; i++) {
    //     console.log(numRay[numRay[i]],"det");
    //     // console.log( numRay[numRay[i] % arr_size]);
    // // numRay[numRay[i] % arr_size] = numRay[numRay[i] % arr_size] + arr_size;
	// }
	// console.log("The repeating elements are : ");
	// for (let i = 0; i < arr_size; i++) {
	// 	if (numRay[i] >= arr_size * 2) {
	// 		console.log(i + " ");
	// 	}
	// }

    
// duplicate
    

// const array = [3, 8, 7, 5, 3, 9, 8];
    // const uniqueSet = new Set(array);
    // const filteredElements = array.filter(currentValue => {
    //       if (uniqueSet.has(currentValue)) {
    //          uniqueSet.delete(currentValue);
    //       }
    //       else {
    //          return currentValue;
    //       }
    //    }
    // );

    // console.log(filteredElements);


    // indexOf() and filter()
    // var array = [1, 4, 8, 2, 4, 1, 6, 2, 9, 7];
    // function findDuplicates(arr) {
    //    return arr.filter((currentValue, currentIndex) =>
    //    arr.indexOf(currentValue) !== currentIndex);
    // }
    // console.log(findDuplicates(array));