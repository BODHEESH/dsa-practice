
// Time Complexity: O(log n)
// Space Complexity: O(1)

let a = [33, 44, 55, 66, 77, 88];
let key = 77;

let left = 0;
let right = a.length - 1; // corrected right boundary
let flag = 1;

while (left <= right) { // corrected loop condition
    let mid = Math.floor((left + right) / 2); // ensure mid is recalculated each iteration

    if (a[mid] === key) {
        console.log('element present', mid);
        flag = 0;
        break;
    } else if (a[mid] < key) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

if (flag === 1) {
    console.log("element not present");
}





































// let a=[33,44,55,66,77,88];
// let key=77;

// let left=0;
// let right=a.length; 
// let mid=(left+right)/2;

// // console.log(Math.floor(mid))
// // console.log(mid)
// let flag=1;
// while(left!=right)
// {
//     if(key==a[mid])
//     {
//        console.log('element present',mid);
//        flag=0;
//        break;
//     }
//     else if(key>a[mid])
//     {
//      left=mid;
//      mid=Math.floor((left+right)/2)
//     }
//     else if(key<a[mid])
//     {
//      right=mid; 
//      mid=Math.floor((left+right)/2)
//     }
    
// }

// if(flag==1)
// {
//     console.log("element not present");
// }