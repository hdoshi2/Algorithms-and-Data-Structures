function palindrome(string){

  let hash = {}
  let oddCount = 0

  for (let i = 0; i < string.length; i++){
    if (hash[string[i]]){
      hash[string[i]]++
    } else {
      hash[string[i]] = 1
    }
    if (hash[string[i]] % 2 === 1){
      oddCount++
    } else {
      oddCount--
    }
  }

  return oddCount <= 1
}

palindrome('aabbccddddee') // true
