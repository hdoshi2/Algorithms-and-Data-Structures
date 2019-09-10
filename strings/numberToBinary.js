function numToBinary(num){
  let str = []
  while (num > 0){
    console.log(num)
    if(num%2 === 0){
      str.unshift(0)
      num = num / 2
    } else {
      str.unshift(1)
      num = (num - 1) / 2
    }
  }
  return str.join('')
}

numToBinary(28) // '11100'
