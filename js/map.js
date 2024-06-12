
// const arr = [1, 2, 3, 4, 5, 3, 6];

// const mapped = arr.map((item) => {
//     return item > 3 ? item : null;
// }).filter(item => item !== null);

// console.log(mapped); // [4, 5, 6]

const arr = [1, 2, 3, 4, 5, 3, 6];

const mapped = arr.map((item) => {
    return item * 2;
});

console.log(mapped); // [4, 5, 6]

