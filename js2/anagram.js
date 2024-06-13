function anagramCheck(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    const string1 = str1.split('').sort().join('');
    const string2 = str2.split('').sort().join('');

    return (string1 === string2)
}


// console.log(anagramCheck("string1", "string2"));



/* -------------------------------------------------------------------------- */
/*                                  METHOD 2                                  */
/* -------------------------------------------------------------------------- */

function anagramCheck2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount1 = {};
    const charCount2 = {};

    for (let i = 0; i < str1.length; i++) {
        charCount1[str1[i]] = (charCount1[str1[i]] || 0) + 1;
        charCount2[str2[i]] = (charCount2[str2[i]] || 0) + 1;
    }

    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

console.log(anagramCheck2("string1", "string2")); // Output: false
console.log(anagramCheck2("listen", "silent")); // Output: true
