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


// function palindrome(string){
//   let hash ={}
//   let count = 0
//   for (let i = 0; i < string.length; i++){
//     let current = string[i].toLowerCase()
//     if(hash[current]){
//       hash[current]++
//     } else if (current === " "){
//       continue
//     } else {
//       hash[current] = 1
//     }
//   }

//   for (let key in hash){
//     console.log(count)
//     if (hash[key] % 2 === 1){
//       count++
//     }
//     if (count > 1){
//       return false
//     }
//   }

//   return true
// }

// console.log(palindrome("Tact Coa")) // true
