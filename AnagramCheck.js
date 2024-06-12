/* -------------------------------------------------------------------------- */
/*                                 Method 1 :                                 */
/* -------------------------------------------------------------------------- */

// Time Complexity: O(nlogn)
// Space Complexity: O(n)


// const AnagramCheck = (str1,str2) =>{

// let a = str1.split('').sort().join('')
// let b = str2.split('').sort().join('')

// return a === b;

// }

// console.log(AnagramCheck('hello',"oellh"));



/* -------------------------------------------------------------------------- */
/*                             efficient method 2                             */
/* -------------------------------------------------------------------------- */

// Time Complexity: O(n)                   
// Space Complexity: O(1)


const AnagramCheck = (str1, str2) => {
    // If the lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) return false;

    // Create frequency counters
    const charCount1 = {};
    const charCount2 = {};

    // Populate the frequency counters for each string
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare the frequency counters
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

console.log(AnagramCheck('hello', 'oellh'));  // true
console.log(AnagramCheck('hello', 'world'));  // false









