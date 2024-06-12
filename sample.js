// let king = "Ram"

// {
//      king  = 'john'
//     console.log(king);
// }

// console.log("2nd part:",king);


// let a = 1.23
// let b = parseFloat(a).toFixed(0,2)

// // let s = a-b;
// console.log(typeof(b));
// console.log(b);


// Memoization

// const Memo = () =>{
//     let cache = {}
//     return (value) =>{
//         if(value in cache){
//             console.log("Fetching from Cache");
//             return cache[value];
//         }
//         else {
//             console.log("calculating from result");
//             let result = value + 20;
//             cache[value] = result 
//             return result
//         }
//     }
// }

// const memData = Memo()
// console.log(memData(20));
// console.log(memData(20));

// const count = false;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     }
// }).catch((error,reject)=>{

//     reject("rejected")
// });

// console.log(countValue);


// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
 
//  // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
 
//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );


// const count = false;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// }).catch((reject)=>{
//     console.log(reject);
// })

// console.log(countValue);


// find target with sum of array no:s

// let arr=[1,2,4,5,6,7,5]
// let target = 3;

// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]+arr[j]==target){
//         console.log(arr[i],arr[j]);
//         break;
//     }
//   }
// }





// for(let i =0;i<a.length;i++){
//     if(i==3)
//     break;
//     // continue
//     console.log(a[i]);
// }


// string Reversing

// let str1 = "ameen"

// // let a =  str1.split('').reverse().join('')

// // console.log(a);

// let b = ''

// for(let i =str1.length-1;i>=0;i--){

// b = b+str1[i]

// }
// console.log(b);

// binary Search 



// let b=[33,44,55,66,77,88];
// let key=44;

// let left=0;
// let right=b.length; 
// let mid=(left+right)/2;

// let flag=1;
// while(left!=right)
// {
//     if(key==b[mid])
//     {
//        console.log('element present',mid);
//        flag=0;
//        break;
//     }
//     else if(key>b[mid])
//     {
//      left=mid;
//      mid=Math.floor((left+right)/2)
//     }
//     else if(key<b[mid])
//     {
//      right=mid; 
//      mid=Math.floor((left+right)/2)
//     }
    
// }

// if(flag==1)
// {
//     console.log("element not present");
// }



// bubble sort



// var a =[34,33,4,22,6,88];
// let temp=0;
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++)
//     {
//         if(a[i]>a[j])
//         {
//           temp=a[i];
//           a[i]=a[j];
//           a[j]=temp;  
//         }
//     }
// }

//     console.log(a);


// insertion sort


// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i]
//     let j
//     for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//       arr[j + 1] = arr[j]
//     }
//     arr[j + 1] = currentValue
//   }
//   return arr
// }
// console.log(insertionSort([2, 1, 3, 7, 5])) // [1, 2, 3, 5, 7]  



// const insertionSort = (a) =>{

//   for(let i = 0;i<a.length;i++){
//     let j = i-1;
//     let inserTingelement = a[i]

//     while(j >= 0 && a[j]>inserTingelement){
//       a[j+1] = a[j]
//       j= j-1;
//     }
//        a[j+1] = inserTingelement
//   }
//  return a;
// }

// console.log(insertionSort([6,8,-7,0,9]))


// quick sort


const QuickSort = (arr)=>{
  if(arr.length < 2){
    return arr;
  }

  let left = []
  let right = []
  let pivot = arr[arr.length-1]
  // console.log(arr.length,"pp");
  // console.log(arr.length-1,"pppp");

  // console.log(arr[arr.length-2],"ccc");
  // console.log(pivot,"pivot");

  for(let i =0; i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }
    else{
      right.push(arr[i])

    }
  }
  return [...QuickSort(left),pivot, ...QuickSort(right)]

}

// }

// console.log(QuickSort([6,0,4,5,2,3]));


// var a = 2
// var b = 5

// // c =+a
// c=b+=a;
// d = b ? a :"hey"

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// function isodd(element, index, array) {
//   return (element % 2 == 1);
// }
   
// function geeks() {
//   var arr = [ 6, 1, 8, 32, 35 ];
   
//   // check for odd number
//   var value = arr.some(isodd);
//   console.log(value);
// }
// geeks();

// let a = [1,2,3]
// let b =[4,5,6]

// let c = b.join(a)
// console.log(c);

// let a = "bodheesh";
//  a[2] = "y";
// console.log(a[2]);

// let a = 'ameen'
// let b ="JAVA"
// let e = 102122

// let c = a.toUpperCase()
// let d = b.toLowerCase()
// let g = Math.random(e)
// console.log(c);
// console.log(g);





var employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}


console.log("Employee=> ", employee);
var newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.


// var employee = {
// 	eid: "E102",
// 	ename: "Jack",
// 	eaddress: "New York",
// 	salary: 50000
// }
// console.log("=========Deep Copy========");
// var newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);



