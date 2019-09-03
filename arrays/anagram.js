function anagram(array) {
  let newArray = [];
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let newWord = current
      .split("")
      .sort((a, b) => a < b)
      .join("");
    if (hash[newWord]) {
      hash[newWord].push(current);
    } else {
      hash[newWord] = [current];
    }
  }

  const values = Object.values(hash);

  for (let i = 0; i < values.length; i++) {
    if (values[i].length > 1) {
      newArray.push(values[i]);
    }
  }

  return newArray;
}

anagram(["cat", "act", "ignore", "a phrase", "tape", "pate", "e hpsara"]); // [ [ 'cat', 'act' ],[ 'a phrase', 'e hpsara' ],[ 'tape', 'pate' ] ]
