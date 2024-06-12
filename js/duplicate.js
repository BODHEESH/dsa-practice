// var arr = [2, 3, 3, 4, 4, 6, 7, 7, 7];
// let repeat =[]
// n = arr.length;
// var flag = 0;

// for (i = 0; i < n; i++) {
//     for (j = i + 1; j < n; j++) {
//         if (arr[i] == arr[j]) {
//             flag = 1;
//         }
//     }
//     if (flag == 1) {
//         console.log("repeat element \n" + arr[i]);
// repeat.push(arr[i]);
//         flag = 0;
//     }
// }

// console.log(repeat)


var arr = [2, 3, 3, 4, 4, 6, 7, 7, 7];
let repeat = [];
n = arr.length;
var flag = 0;

for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
        if (arr[i] == arr[j]) {
            flag = 1;
        }
    }
    if (flag == 1 && !repeat.includes(arr[i])) {
        console.log("repeat element \n" + arr[i]);
        repeat.push(arr[i]);
        flag = 0;
    }
}

console.log(repeat);
