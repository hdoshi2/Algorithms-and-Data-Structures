//given an ordered list with only one missing number, find that missing number. 

function findMissing(array){

  while(array.length > 2){
    let left = 0
    let right = array.length - 1
    let mid = Math.round((right-left)/2)

    if(array[mid] - array[left] === mid){
      array = array.slice(mid, right + 1)
    } else {
      array = array.slice(left, mid + 1)
    }

  }
  return array[0]+1
}

findMissing([5,6,7,9,10,11,12,13,14,15,16,18,17,19]) // 8
findMissing([5,6,7,8,9,10,11,12,13,14,15,16,18,19]) // 17

