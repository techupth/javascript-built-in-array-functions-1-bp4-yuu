let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.length
}

//const result = getWordLengths(words);

let result = words.map(getWordLengths)

console.log(result); // Output: [5, 5]
