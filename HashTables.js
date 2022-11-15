/*
Hash Tables are a data structure that allows one to organize data. 
The usecases are numerous. For example a library can keep track of how many 
books they would have for a specific title. 

Hash Tables store information with a key. Kind of like a 
two dimensional array in the most simplest forum. 

~Logic Cooking Recipe Notes
Fundamentally Hash Tables are structured as
1. Take a value and create a key associated with it. 
2. Use the key as an index for an array/map for look up and store the value. 


// Basic concepts alogrithm into function
// lets say we want to organize the data into evens and odds
  inputs [1,2,3,4,5,6,7,8]
// Array
  inputs [1,2,3,4,5,6,7,8]

  var hashTable = new Array(2) // creating an array with a length of 2
  hashTable[0] = new Array // creating a new array to store evens 
  hashTable[1] = new Array // creating a new array to store odds

  for (let i = 0; i < inputs.length; i++) {
    // we are using the remainder operator to determine if the value is even or odd
    // then the value becomes the key to the hashTable
    var key = inputs[i] % 2 // output will be either 0 or 1
    
    // with the key we will push the value into the array of the hash table
    hashTable[key].push(inputs[i])
  }
  // we will return a 2D array with the values sorted as evens or odds
  return hashTable
  
  // Table
    inputs [1,2,3,4,5,6,7,8]
    var hashTable = new Map() // creating our map

    hashTable.set('0', []).set('1', []) // adding arrays to keys 0 and 1

    for (let i = 0; i < inputs.length; i++) {
    // we are using the remainder operator to determine if the value is even or odd
    // then the value becomes the key to the hashTable
    var key = inputs[i] % 2 // output will be either 0 or 1
    
    // with the key we will push the value into the array of the hash table
    hashTable[key].push(inputs[i])
    }
*/

const validAnagram242 = () => {
  /*
    Problem: leetcode 242: Valid Anagram
    https://leetcode.com/problems/valid-anagram/

    Solution explained: 
    We are given two strings, they just have to have the same characters and 
    the same number of occurances of the character. We just have to map the characters
    and the occurences to the characters for each string. If the hash tables do
    end up being the same we can then add them in. 

    ~Logic Cooking Recipe Notes
    1. Create a function that will map the strings into a hashTable
      a. The function will handle one input string
      b. It will create an array with the length of 26 to 
          represent each character of the alphabet
        -Assign each element of the array as 0
      c. Loop through each character of the string and the key will be the 
          "character code - 97". (lowercase 'a' is 97 in ASCII, 0 will be the start). 
        -For each loop, we will increment the value by 1 when we hash the table
      d. return the map but parse it as a string. 

    2. Run the function with the values given
      i.e. functionStepOne(string1); functionStepOne(string1)
    3. If we compare the results from running the functions and they are equal to each other, 
      return true, otherise return false
  */
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  var isAnagram = function(s, t) {
    const mapper = (str) => {
        let mapping = new Array(26).fill(0)
        for (let char of str) mapping[char.charCodeAt()-97]++
        return mapping.toString()
    }
    return mapper(s) == mapper(t)
  }
}