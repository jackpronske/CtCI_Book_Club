//Given a string, write a function to check if it is a permutations of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

function palindromePermutations(string) {

  // const isPalindrome = (str) => {
  //   if (str.length < 2) return true;
  //   if (str[0] === str[str.length - 1]) {
  //       const newString = str.slice(1, -1);
  //       return isPalindrome(newString);
  //   }
  //   return false;
  // }

  let fixedArray = [];

  for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') continue;
      fixedArray.push(string[i].toLowerCase())
  }

  const letterContainer = {};
  for (let i = 0; i < fixedArray.length; i++) {
    if (!letterContainer[fixedArray[i]]) {
      letterContainer[fixedArray[i]] = 0;
    }
    letterContainer[fixedArray[i]]++;
  }
  const countTotals = Object.values(letterContainer);
  let hasOdd = false;
  for (let i = 0; i < countTotals.length; i++) {
    if (countTotals[i] % 2 !== 0) {
      if (hasOdd) {
        return false;
      }
      hasOdd = true;
    }
  }
  return true;
  // let permutations = [];

  // const innerFunction = (acc, currentArray) => {
  //     for (let i = 0; i < currentArray.length; i++) {
  //         acc += currentArray[i];
  //         if (acc.length === fixedArray.length) {
  //             permutations.push(acc);
  //         } else {
  //             let tempArray = currentArray.slice();
  //             tempArray.splice(i, 1);
  //             innerFunction(acc, tempArray);
  //         }
  //         acc = acc.slice(0, -1);
  //     }
  // }

  // innerFunction('', fixedArray);

  // for (let i = 0; i < permutations.length; i++) {
  //     if (isPalindrome(permutations[i])) {
  //         return true;
  //     }
  // }
  // return false;
}

module.exports = palindromePermutations;
