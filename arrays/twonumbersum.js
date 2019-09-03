
// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.



function twoNumberSum(array, targetSum) {
  // Write your code here.

  // nested for loop

  // let sortedArray = array.sort(function(a, b){return a - b})
  // let newArray = [];
  // for (let i = 0; i < sortedArray.length; i++){
  // 	for (let j = i + 1; j < sortedArray.length; j++){
  // 		if (sortedArray[i] + sortedArray[j] === targetSum){
  // 			newArray.push(sortedArray[i])
  // 			newArray.push(sortedArray[j])
  // 		}
  // 	}
  // }
  // return newArray

  // hash table

  let hash = {};
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (hash[targetSum - array[i]]) {
      newArray.push(array[i], hash[targetSum - array[i]]);
    } else {
      hash[array[i]] = array[i];
    }
  }
  console.log("tessttttt");
  return newArray.sort(function(a, b) {
    return a - b;
  });
}

// Add, edit, or remove tests in this file.
// Treat it as your playground!

// const program = require("./program");
// const chai = require("chai");

// it('Test Case #1', function() {
//   chai.expect(program.twoNumberSum([4, 6], 10)).to.deep.equal([4, 6]);
// });

// it('Test Case #2', function() {
//   chai.expect(program.twoNumberSum([4, 6, 1], 5)).to.deep.equal([1, 4]);
// });

// it('Test Case #3', function() {
//   chai.expect(program.twoNumberSum([4, 6, 1, -3], 3)).to.deep.equal([-3, 6]);
// });

// it('Test Case #4', function() {
//   chai.expect(program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).to.deep.equal([-1, 11]);
// });

// it('Test Case #5', function() {
//   chai.expect(program.twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)).to.deep.equal([8, 9]);
// });

// it('Test Case #6', function() {
//   chai.expect(program.twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)).to.deep.equal([3, 15]);
// });

// it('Test Case #7', function() {
//   chai.expect(program.twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)).to.deep.equal([-5, 0]);
// });

// it('Test Case #8', function() {
//   chai.expect(program.twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)).to.deep.equal([-47, 210]);
// });

// it('Test Case #9', function() {
//   chai.expect(program.twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)).to.deep.equal([]);
// });

// it('Test Case #10', function() {
//   chai.expect(program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)).to.deep.equal([]);
// });
