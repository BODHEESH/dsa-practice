const arr = [1, 2, 3, 4, 5, 3, 6];

const result = arr.reduce((acc, curr) => {
    const res = acc * curr;
    return res;
}, 1);

console.log(result);
