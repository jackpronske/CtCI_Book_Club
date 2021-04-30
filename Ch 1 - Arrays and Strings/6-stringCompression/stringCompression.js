//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str) {
  let tempCounter = 1;
  let resultString = str[0];
  for (let i = 1; i < str.length; i++) {
    if (resultString[resultString.length - 1] === str[i]) {
      tempCounter++;
    } else {
      resultString += tempCounter;
      resultString += str[i];
      tempCounter = 1;
    }
  }
  if (tempCounter > 1) {
    resultString += tempCounter;
  }
  return resultString.length > str.length ? str : resultString;
}

module.exports = stringCompression;
