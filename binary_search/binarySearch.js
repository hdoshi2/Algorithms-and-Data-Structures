
function binarySearch(array, target){

  let left = 0
  let right = array.length - 1
  let middle = Math.round((right - left) / 2)

  if (array[middle] === target || array[left] === target || array[right] === target){
      return target
  } else {
      console.log(array, left, middle, right)
    if(array.length > 1){
      if (target < array[middle]){
        left = middle
      } else {
        right = middle
      }
      array.splice(left,right)
      return binarySearch(array, target)
    } else {
    return false
    }
  }

}



console.log(binarySearch([1,3,4,5,10,15,20,22,23,98,1000], 8));
