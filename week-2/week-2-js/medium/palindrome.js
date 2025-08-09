/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // normalize the string by removing spaces and special characters
  let filteredStr = '';
  for (let char of str) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      filteredStr += char.toLowerCase(); // convert to lower case for case-insensitivity
    }
  }
  // two pointers approach
  let left = 0 ;
  let right = str.length - 1;

  while (left < right) {
    // convert both characters to lower case for case-insensitivity
    if (if (filteredStr[left] !== filteredStr[right]) {
      return false; // not a palindrome
    }
    left++;
    right--;
  }
  
  return true;
}

module.exports = isPalindrome;
