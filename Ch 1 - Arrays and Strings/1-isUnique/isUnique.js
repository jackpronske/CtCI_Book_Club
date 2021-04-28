//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  const memo = {};
  for (let i = 0; i < str.length; i++) {
    if (memo[str[i]]) {
      return false;
    }
    memo[str[i]] = 1;
  }
  return true;
}

module.exports = isUnique;
