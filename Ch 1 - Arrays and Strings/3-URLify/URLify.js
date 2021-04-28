//Write a method to replace all spaces in a string with '%20'.

const URLify = (str) => {
  return str.split(' ').join('%20');
};

module.exports = URLify;
