function hasTargetSum(array, target) {
  // Write your algorithm here

  // WRITE IN OWN WORDS:
  // function has to evaluate whether two numbers add up to target sum
  // number of comparisons will be sum of 1 through (array.length-1)
  // (worst case scenario, if have 6 numbers, first round has 5 comparisons, then 4, 3, 2, 1) = 15 total comparisons
  // as soon as function is true, return true
  // only at end, if no matching pairs found, return false
  // for loop using counter?, nested for loop using counter again (first time, counter starts at 0; second counter starts at firstCounter + 1; both counters go up to < array.length)
  // after have both numbers, compare to target
  for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/
// for input array of "n" items, worst case scenario highest number of comparison cases will be Sigma(1 through n-1), e.g. an array of 6 numbers would have, at most, 1+2+3+4+5 = 15 comparisons. 
// array of 1 has 0 comparisons, array of 2 has one comparison (1 comparison), array of 3 has 3 comparisons (1+2), array of 4 has 6 comparisons (1+2+3)
// 0(n)? Not sure if this would be considered quadratic or linear. Time goes up by n-1 each time n increases by 1. 


/* 
  Add your pseudocode here
*/
// declare function sum, pass array of nums and target num
    // first loop refers to first number in comparison, goes up by 1 through each pass up to length-1 (don't need to look at last number)
      // second loop refers to second number in comparison (index starts at indexFirstNumber + 1, goes up to length of array)
      // if firstNum + secondNum === targetNum, return true;
    // return false

/*
  Add written explanation of your solution here
*/
// Each pair of numbers only needs to be compared once, and doesn't need to be compared to itself. In first pass, you compare the first item to every other. In subsequent passes, you just compare only the remaining pairs that haven't been done yet. 
// The number of comparisons that needs to happen goes down by 1 with each round. 
// Only need one equivalent example to stop the function, so want "return true" within the loop so function ends as soon as this happens. If it never happens, return false would only happen after every possible comparison has been performed. 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // ALEX TEST CASES
  console.log("Expecting: false")
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 10))

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 8))


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
