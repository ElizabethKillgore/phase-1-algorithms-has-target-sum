function hasTargetSum(array, target) {
  const seenNumbers = {}

    for (const number of array) {
      const sumMatch = target - number; 
    if (sumMatch in seenNumbers) return true; 
    seenNumbers[number] = true
    }
  
  return false
}


// for (let i = 0; i < array.length; i++) {
  //   const sumMatch = target - array[i] 
  //   if (seenNumbers[sumMatch]) return true
  //   seenNumbers[array[i]] = true
  // }


// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//   const sumMatch = target - array[i] 
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[j] === sumMatch) return true;
//     }
//   }
// return false;
// } 
// let array = [num1, num2, num3, num4, num5]
//we must keep going through the entire array adding sums until we get a true //return, if (num1 + num2 === target) {
  // return true
//}
//if I have an array of [1, 2, 3, 4, 5] has target 7.
// 3 + 4 = 7  I should return true.  go through array, each number, and see if  number added with another number in the array adds up to target.  if not, return false


// our output will be a boolean, true or false.  So we can write some statement as the block of code in our function 
// num1 +  num2 = numTarget return true
// if not return false 


/* 
  Write the Big O time complexity of your function here
  latest version runtime
  0(n) instead of 0(n^2)

    // for time complexity instead of first code solution,
*/ // we can create an object to keep track of numbers we've already seen, so as we see a number, we can add that number to our object, which would enable us to not have to look through every number basically twice
//we have to iterate through the array once to get those numbers into that object. So instead of looping through array to find complement number (sumMatch) we are going to check to see if any key in the object is our complement.  if so, return true, otherwise add that number to our object.
  //first I am going to make an object. it's important that the number itself is the key in the object.
  // hasTargetSum([1, 2, 3, 4], 6)
  // seenNumbers = {
  // 1: true
  // 2: true
  // 3: true              when we get to the 4th iteration, number 4, we see it is a complementary number with 2 to add up to 6
  // }
//time complexity
// first for loop will be n steps
 //variable const  will be n steps
 // but since we have a nested loop, a loop inside of a loop, we will end up with 
 // n * n steps for second for loop
 // so runtime of our function will be 0(n^2), not the best runtime.
 // as the array gets bigger, the runtime will get worse.  for every element added to that array the alrogithm gets twice as less efficient
 // also, space complexity, we'll need memory for the array.  As the size of our array grows, the more memory we will need. 0(n)



/* 
  Add your pseudocode here
*/
//
// iterate through an array to find sumMatch
//   if (num1[0] + num2[1] === target) {
//     return true
//   } else  {
  // num1 + num2 !== target {
//     return false
//   }
// }




//must iterate through each number in the array, 
//and for that number, subtract it from the target, check each other number in the array one by one to see if the number I need, the 'sum match', is there.
// If we get to the end of the array with no 'sum matches', return false.
// complement number = target - current number

/*
  Add written explanation of your solution here
  // // first define array as a group of numbers, our input, the sum of two of the elements in the array, will equal target, also, our input
  // check if any number in the rest of the array, is our sumMatch
  output true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 5, 8, 11], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 3, 5, 7, 15, 20], 22));
}

module.exports = hasTargetSum;
