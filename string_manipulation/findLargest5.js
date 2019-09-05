//Find the largest number if 5 was added anywhere

function largest(num) {
  let largest = num;
  let numberAsString = num.toString();

  for (let i = 0; i < numberAsString.length + 1; i++) {
    let array = numberAsString.split("");
    array.splice(i, 0, "5");
    let newNumber = +array.join("");
    if (newNumber > largest) {
      largest = newNumber;
    }
  }
  return largest;
}

console.log(largest(4)); // 54
console.log(largest(69)); // 695
console.log(largest(933)); // 9533
