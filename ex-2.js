let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  if (words.length >=5) {
    return words 
  }
}

//const result = get5CharWords(words);

let result = words.filter(get5CharWords)

console.log(result); // Output: ["apple", "elephant"]
