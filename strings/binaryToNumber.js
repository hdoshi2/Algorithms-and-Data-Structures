function binaryToNum(str){
  let sum = 0
  let count = str.length - 1

  for (let i = 0; i < str.length; i++){
    if(str[i]==='1'){
      sum += Math.pow(2,count)
    }
    count--
  }

  return sum
}

binaryToNum('11100') // 28
