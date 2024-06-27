const sentence = "The quick brown fox jumps over the lazy dog";

// PART 1
// Split the sentence by spaces to get an array of words
const words = sentence.split(" ");
console.log("Count of number of words: ", words.length)

// PART 2
// Iterate through the array of words to find the word with the maximum length.
longestString = (arr) => {
    return arr.reduce((longestWord, newWord) => longestWord.length <= newWord.length ? newWord : longestWord, "");
}

console.log("Longest word: ", longestString(words))

// PART 3
// Use the replace method to replace the first occurrence of a specific word with another word
const newSentence = sentence.replace("fox", "cat");
console.log("Fox replaced with cat in the sentence: ", newSentence);

// PART 4
// Split the sentence into words, reverse the array of words, and join them back into a string.
const reversedWords = [...words].reverse();
const reversedSentence = reversedWords.join(" ");
console.log("Reversed Words: ", reversedSentence);

// PART 5
// Split the sentence into words, capitalize the first letter of each word, and join them back into a string.
const titleCaseWords = words.map( word => word.charAt(0).toUpperCase() + word.substring(1) );
const titleCaseSentence = titleCaseWords.join(" ");
console.log("Title Case Sentence: ", titleCaseSentence);