const arr = [1, 2, 3, 4, 5, 3, 6];

const filter = arr.filter((item)=> {
    const res = item < 5;
    return res
})

console.log(filter)