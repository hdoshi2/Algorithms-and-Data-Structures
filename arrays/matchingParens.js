function parens(string){

  let array = []
  let openHash = {'}':'{', ']':'[', ')':'('}

  for (let i = 0; i < string.length; i++){
    let current = string[i]
    console.log(array, current)
    if (current === '{' || current === '[' || current === '('){
      array.push(current)
    } else if (array[array.length - 1] === openHash[current]) {
      array.pop()
    } else {
      return false
    }
  }
  return array.length === 0
}


console.log(parens('{[]}()')) //true
console.log(parens('{[]}[()')) //false
console.log(parens('[[]]()[[({})]]'))//true
