/* -------------------------------------------------------------------------- */
/*                                  method 1                                  */
/* -------------------------------------------------------------------------- */


function isPalindrome(str, start, end) {
    // Base case: if start index is greater than or equal to end index, it's a palindrome
    if (start >= end) {
        return true;
    }

    // Check if the characters at start and end are the same
    if (str[start] !== str[end]) {
        return false;
    }

    // Recursively call the function with the next indices
    return isPalindrome(str, start + 1, end - 1);
}

// Example usage
const str1 = "racecar";
const str2 = "hello";

// Initialize the recursive function with start index 0 and end index str.length - 1
console.log(isPalindrome(str1, 0, str1.length - 1)); // Output: true
console.log(isPalindrome(str2, 0, str2.length - 1)); // Output: false



/* -------------------------------------------------------------------------- */
/*                                  method 2                                  */
/* -------------------------------------------------------------------------- */



// const isPalindrome = (inputChar) => {
//     const str = inputChar.toString();

//     const checkPalindrome = (s, start, end) => {
//         console.log("start and end", start, end, s)
//         // Base case: If start is greater than or equal to end, it's a palindrome
//         if (start >= end) {
//             return true;
//         }
//         // Check if characters at the start and end are the same
//         if (s[start] !== s[end]) {
//             return false;
//         }
//         // Recursive case: Move towards the center
//         return checkPalindrome(s, start + 1, end - 1);
//     };

//     return checkPalindrome(str, 0, str.length - 1);
// };

// console.log(isPalindrome('racecar')); // true
// console.log(isPalindrome('abc'));     // false
// console.log(isPalindrome(121));       // true

