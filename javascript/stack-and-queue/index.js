function validateBrackets(str) {
  const stack = [];
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closeBrackets.includes(str[i])) {
      const index = closeBrackets.indexOf(str[i]);
      if (stack.length === 0 || openBrackets[index] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}



module.exports = validateBrackets;
