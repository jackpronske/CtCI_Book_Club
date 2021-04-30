//There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str1, str2) {
  if (Math.abs(str2.length - str1.length > 1)) {
    return false;
  }
  let small, large;
  if (str2.length > str1.length) {
    small = str1;
    large = str2;
  } else {
    small = str2;
    large = str1;
  }
  let onlyChance = false;
  for (let i = 0; i < small.length; i++) {
    if (small[i] === large[i] || small[i] === large[i + 1]) {
      continue;
    } else {
      if (onlyChance) {
        return false;
      }
      onlyChance = true;
    }
  }
  if (onlyChance && large.length !== small.length) {
    return false;
  }
  return true;
}

module.exports = oneAway;
