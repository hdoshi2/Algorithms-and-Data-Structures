
// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz (num){

  let array = []

  for (let i = 1; i <= num; i++){
    // if(i % 3 === 0 && i % 5 === 0){
    //   array.push('FIZZBUZZ')
    // } else if (i % 3 === 0){
    //   array.push("FIZZ")
    // } else if (i % 5 === 0){
    //   array.push('BUZZ')
    // } else {
    //   array.push(i)
    // }

    // better approach, if you want to add more to it for example: add QQ to multiples of 2. It would be messy for the code above. 
    let output = ""
    if(i%3 === 0) {output += 'Fizz'}
    if(i%5 === 0) {output += 'Buzz'}
    if(i%2 === 0) {output += 'QQ'}
    if(output === "") { output = i}
    array.push(output)
  }

  return array

}

fizzBuzz(30)
