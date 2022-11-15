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
const firstBadVersion278 = () => {
  /*
  Problem: leetcode 278: First Bad Version
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

  function solution(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 0, right = n
        var middle
        while (left <= n) {
            middle = Math.floor((right - left)/2) + left
            isBadVersion(middle) ? right = middle - 1 : left = middle + 1
        }
        return left
    }
  }
}


const kokoEatingBananas875 = () => {
//Problem: leetcode 875: Koko Eating Bananas 
  /*
  https://leetcode.com/problems/koko-eating-bananas/

  Solution explained: 
  There is three variables we must understand
  
  1. An array with values of integers
    -The value of the integers in the array represent banana piles
  2. An integer that represents the hours Koko has to eat the bananas
  3. An output integer that represents the number of banans Koko eats per hour

  Variables 1 and 2 will be our input values or arguments
  Variable 3 will be the output we must return
  
  Figuring out how to get the proper value of the 3rd variable:
  If we read the problem correctly, we can understand the parameters of the eating speed:
  -"Koko can decide her bananas-per-hour eating speed of k"
  -"Each hour, she chooses some pile of bananas and eats k bananas from that pile."
  -"If the pile has less than k bananas, she eats all of them instead 
    and will not eat any more bananas during this hour"
  -"Koko likes to eat slowly but still wants to finish eating all the bananas 
    before the guards return."

  With this information we understand that there is a constant eating speed
  The constant eating speed must be the able to eat all the bananas in the
  piles by the hours given. We want to find the smallest value without 
  exceeding the hours given to us. 

  Essentially we are going to start with value 1 and the max pile value 
  and use a binary search that will compute the middle value of min and max. 
  Use that middle value to see if we need to increase or decrease the ammount 
  and find our solution.

  ~Logic Cooking Recipe Notes
  1. Receive two input values. 
    -An array with integer values
    -An integer that represents the time limit 
     we have to eat all the bananas
  2. Create two integers left and right
    -left will have a value of 1, since eating 0 bananas per hour
     will never let Koko eat all the bananas
    -right will be the biggest integer in our integer array. 
      *You can use a built in method to return the biggest value or
       you can run through the array that will return the value. 
       Either method will be O(n) in time complexity
  3. Create or continue a while loop with the argument left is less than or equal to right
    -If the argument is false, then jump to step#
  4. Create a middle value that will find the middle integer of left and right
  5.Initialize a variable named sum
    -We will use this to find the number of hours it takes to eat all 
     the bananas in the pile. 
  6. Create a for loop that will take each value of the input integer 
     to increment the sum value.
     -For each pile, we will compute pile / middle and round up. 
      We are rounding up because, Koko wants to take as much time
      to eat each banana in the pile. 
  7. We will check to see if the value of sum is less than or equal to 
     our input limit. 
     -If sum is less than input limit
      *assign right as middle - 1
       We want to increase the value of sum for the next iteration 
       to check and see if we still have time to spare. 
     -Else, we have clearly passed the limit hour
      *assign left as middle + 1
        We need to decrease the value because we will either 
        use up too much time, or cannot finish the bananas before 
        the limit integer. 
  8. Loop again back to step 3.
  9. Return Left, since it will be the valid that will allow Koko to each 
     from the banana pile as slowly as Koko can.
  */

  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  var minEatingSpeed = function(piles, h) {
    var left = 1, right = Math.max(...piles)
    
    while (left <= right) {
        let middle = left + Math.floor((right-left)/2) 
        let sum = 0
        for (let pile of piles) sum = sum + Math.ceil(pile/middle)
        
        if (sum <= h) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return left
  }
}


const medianOfTwoSortedArrays4 = () => {
  //Problem: leetcode 4: Median of Two Sorted Arrays
    /*
    https://leetcode.com/problems/median-of-two-sorted-arrays/
  
    Solution explained: 
    tbd
    ~Logic Cooking Recipe Notes
    tbd
    */
  
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
  var findMedianSortedArrays = function(nums1, nums2) {
    if (nums2.length < nums1.length) [nums1, nums2] = [nums2, nums1]
    
    var half = nums1.length + nums2.length
    var isEven = half % 2 == 0 ? true : false
    half = Math.ceil(half/2) - 2
    
    var l = 0, r = nums1.length -1

    const bounds = (indexArr, arrays) => {``
        let result = [0, 0, 0, 0]
        let switchArr = 0
        for (let i in indexArr) {
            if (indexArr[i] < 0) result[i] = -Infinity
            else if (indexArr[i] >= arrays[switchArr].length) result[i] = Infinity
            else result[i] = arrays[switchArr][indexArr[i]]
            switchArr = switchArr == 0 ? 1 : 0
        }
        return result
    }
    
    
    while (true) {
        let i1 = l + Math.floor((r-l)/2)
        let i2 = half - i1
        
        let [left1, left2, right1, right2] = bounds([i1,i2,i1+1,i2+1],[nums1, nums2])
        
        if (left1 > right2) {
            r = i1 - 1
        } else if (left2 > right1) {
            l = i1 + 1
        } else {
            let one = Math.max(left1, left2)
            if (isEven) {
                let two = Math.min(right1, right2)
                one = (two+one)/2
            } 
            return one
        }
    }
  }
}
  