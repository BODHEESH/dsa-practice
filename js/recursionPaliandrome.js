
const isPalindrome = (inputChar) => {
    const str = inputChar.toString();

    const checkPalindrome = (s, start, end) => {
        console.log("start and end", start, end, s)
        // Base case: If start is greater than or equal to end, it's a palindrome
        if (start >= end) {
            return true;
        }
        // Check if characters at the start and end are the same
        if (s[start] !== s[end]) {
            return false;
        }
        // Recursive case: Move towards the center
        return checkPalindrome(s, start + 1, end - 1);
    };

    return checkPalindrome(str, 0, str.length - 1);
};

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('abc'));     // false
console.log(isPalindrome(121));       // true
