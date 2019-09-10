//Three type of edits allowed:
//   1. insert a Character
//   2. remove a Character
//   3. replace a Character
// If more than 1 change is necessary, then return false

function oneAway(first, second){
  if(first.length === second.length){
    return replace(first, second)
  } else if (first.length + 1 === second.length){
    return insert(first, second)
  } else if (first.length - 1 === second.length){
    return insert(first, second)
  } else {
    return false
  }
}

function replace(first, second){
  let difference = false
  for (let i = 0; i < first.length; i++){
    if (first[i] !== second[i]){
      if(difference){
        return false
      }
      difference = true
    }
  }
  return true
}

function insert(first, second){
  let indexOne = 0
  let indexTwo = 0
  while (indexOne < first.length && indexTwo < second.length){
    if (first[indexOne] !== second[indexTwo]){
      if (indexOne !== indexTwo){
        return false
      }
      indexOne++
    } else {
      indexOne++
      indexTwo++
    }
  }
  return true
}

// console.log(oneAway('pale', 'ple')) // true
// console.log(oneAway('paless', 'pale')) // true
// console.log(oneAway('pale', 'pale')) // true
// console.log(oneAway('pale', 'bake')) // false
