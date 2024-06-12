// FIRST REPEATING ELEMENT IN ARRAY AND ITS COUNT

const array = [1, 15, 2, 3, 3, 3, 4, 6, 6]

let count = 1
for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
        count++;
    }
    if (array[i] !== array[i + 1] && (count > 1)) {
        console.log("Reapeating element is ", array[i]);
        console.log("the count of Repeating element is ", count);
        break;
    }
}
