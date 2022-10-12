// BSA = Binary Seach Algorithm
/*
BSA is used to effectively search through a sorted array for a value
It has a time complexity of O(log n)

~Logic Cooking Recipe Notes
How BSA fundamentally works:
1. Recieve two inputs (or arguments of the function)
  -One input must be a sorted array
  -Another input must be a targeted value that may 
    or may not be inside the sorted Array
  
2. Create two pointers, left and right
  -These pointers must be the start index of the array, 0,
    and the last index of the array, 
    length of (array - 1) (because index starts with 0, 
    an array length of 7 will have a maximum index of 6)

3. You will now need to create a third pointer
    -This is will be the search pointer, you will find the center index 
      of the left and right pointers
    -This will not be calculated immediately, it will be passed to a loop
      in step 4. 

4. A loop will be made to start searching for the target value input
    with the values of left and right, calculate the middle pointer value. 
  -For the loops constraint it will be right less than or equal to left. 
    if the middle value is the same value as left and right, example would 
    be left pointer 0 and right pointer is 0 with the array length being just 1, 
    we must check that value. If we were to have the argument as left less than right, 
    we will not check that value. 
    * If the loop constraint is not valid, we move down to step 7. 

5. Inside the loop, you will check if the input array element with the 
    index value of the middle pointer matches the target value. 
  -If there is a matching value, return the value.

6. We are here beacuse there is no matching value. 
  -If: the input array with an index of the middle pointer value 
    is greater than the target input value, 
    *Reassign right as the middle - 1.
      We are subtracting one, since the middle value of the
      input array has been looked. It is redudant so we 
      move down to the next value. 
  -Else:
    *Reassign the left value as middle + 1. 
      We are adding one, since the middle value of the
      input array has been looked. It is redudant so we 
      move up to the next value. 
  -Loop back to step 4. 

7. We have exited the loop, and have searched through 
    All plausable values within the sorted input array. 
    Since we have not found a matching value, 
    we will return that it does not exist. 
*/

// Basic concept alogrithm into function
/* test case 
  inputArray = [0,1,2,3,4]
  constraint = 1
  
  returns 1
*/
function binarySearch(inputArray, constraint) {
  var [left, right] = [0, inputArray.length -1]

  var middle

  while (left <= right) {
    middle = Math.floor((right - left)/2) + left

    if (inputArray[middle] === constraint) return inputArray[middle]

    // This is a ternary operator that essentially it is an if function.
    // If the input value is greater than constraint
    // After the '?' character, we have {true output} : (else) {false output}
    // <boolean argument> ? <true output> : <false output>
    inputArray[middle] > constraint ? right = middle - 1 : left = middle +1
  }

  return 'constraint does not exist in the input array'
}

// example use cases:

/*
Problem: leetcode 278. First Bad Version
https://leetcode.com/problems/first-bad-version/

Solution explained: 
Because we have to run through an api to check if the version is the 
first bad version, this tells us that we must make a BSA that 
can quickly close into the first bad version by zeroing into 
the first bad version by having the left and right pointers intersect. 
This will be our ticket into creating a solution. 

~Logic Cooking Recipe Notes
1. Create a function that will take an input value of an integer. 
   If you think about it, the first version will either be 0 or 1. 
   Because the constraint of the input value, it is going to start at 1. 
   Because each version increments by 1 integer, if the input value is 7, 
   our search will be an array of 1,2,3,4,5,6,7. 

2. Create a left and right pointer. 
  -Left will be 1, since the first version will always start at 1.
  -Right value will be the input value, since this is the
   most up to date version. 
   *you can save space in terms of memory by using the input value itself. 
   but out of readability I will create a new value. 

3. Create teh middle value, just like the algorith, 
   we will initialize it but not calculate the middle value just yet. 

4. Create a for loop. The argument of this loop will be while left is less than or equal to right.
  -If the conditions of the argument is false, jump to step 7

5. Compute the middle point value of left and right

6. Check to see if the value returns true or false through the bad version api
    - If the value returns false, we reassign left to the value of middle + 1
    - If the value returns true, we reassign the value of right to middle - 1
    -repeat step 4. 

7. Because value of left is the newer version that right: 
   -return left
*/

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  // n is right
  return function(n) {
      var left = 0, right = n
      var middle
      while (left <= n) {
          middle = Math.floor((right - left)/2) + left
          isBadVersion(middle) ? right = middle - 1 : left = middle + 1
      }
      return left
      
  };
};