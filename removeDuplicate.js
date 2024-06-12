//  How do you remove duplicates from an integer array ?

const removeDuplicateEle = (inputArr) => {
    let uniqueArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (!uniqueArr.includes(inputArr[i]))
            uniqueArr.push(inputArr[i])
    }
    return uniqueArr;
}
console.log(removeDuplicateEle([1, 2, 3, 5, 3, 1, 9]));