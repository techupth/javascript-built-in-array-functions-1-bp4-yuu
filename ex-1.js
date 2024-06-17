let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.length
}

//const result = getWordLengths(words);

let result = words.map(getWordLengths)

console.log(result); // Output: [5, 5]


function getLength (words) {
  function wordlength (words) {
    return words.length
  }
  return words.map(wordlength)
}

const result2 = getLength(words)
console.log(result2)