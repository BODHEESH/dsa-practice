// FIRST REPEATING ELEMENT IN ARRAY AND ITS COUNT

// const array =[1,1,2,3,3,3,4,6,6]

// let count = 1
// for(let i =0;i<array.length;i++){
//     if(array[i]===array[i+1]){
//         count++;
//     }
//     if(array[i]!==array[i+1] && (count>1)){
//         console.log("Reapeating element is ",array[i]);
//         console.log("the count of Repeating element is ",count);
//         break;
//     }
// }


// // Javascript program to implement run length encoding

// function encoding(str) {
//        let b =  str.length
//        console.log(b);
//     let n = b
// 	let final = ''
//     for (i = 0; i < n; i++) {
//         let count = 1;
//         while (i < n - 1 && str[i] == str[i + 1]) {
//             count++;
//             i++
//         }
// 		final = final +count+ str[i]
		
//     }
// 	console.log(final);
// }


// let str = "AAABBCC";
// encoding(str);


//swap numbers 

// let x = 29, y = 37;

// // let x = 'ameen' 
// // let y = 'gino'
  
// x = x + y; 
// // = 15
 
// y = x - y;
// // = 10
 
// x = x - y;
// = 5 


// // 10-5+5
// y = y-x+x;
// // = 10



let x = [1,2,3,4,5]
let y = [6,7,8,9,]

[x,y]= [y,x]



console.log("x is :",x);
console.log("y is :",y);
