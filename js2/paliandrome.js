

// function palidrome(string) {
//     const reversed = string.split('').reverse('').join('');
//     if (reversed === string) return true;
//     else return false;
// }
// const string = "racecar"
// // const string = "hello"
// // const string = "bodheesh"
// const result = palidrome(string);

// if (result === false) console.log("the given string is not a palidrome")
// if (result === true) console.log("the given string is palidrome")



/* -------------------------------------------------------------------------- */
/*                              OPTIMISED VERSION                             */
/* -------------------------------------------------------------------------- */

function palindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// const string = "racecar";
const string = "hello";
// const string = "bodheesh";
const result = palindrome(string);

if (result) {
    console.log("The given string is a palindrome");
} else {
    console.log("The given string is not a palindrome");
}
