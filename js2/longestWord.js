function longestWord (word) {
    const words = word.split(" ");
    let longestWord =  "";

    for  (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;

}

console.log("result: ", longestWord("Chetu is a US-based software development company providing businesses worldwide with tailored software solutions from industry specialized developers."));