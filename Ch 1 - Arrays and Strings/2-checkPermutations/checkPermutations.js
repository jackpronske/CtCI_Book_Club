//Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutations = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 0;
    }
    obj1[str1[i]]++;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!obj2[str2[i]]) {
      obj2[str2[i]] = 0;
    }
    obj2[str2[i]]++;
  }
  let obj1keys = Object.keys(obj1);
  for (let i = 0; i < obj1keys.length; i++) {
    if (obj1[obj1keys[i]] !== obj2[obj1keys[i]]) {
      return false;
    }
  }
  return true;
};

module.exports = checkPermutations;
