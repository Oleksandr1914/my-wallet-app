export const formatNumberBalance = number => {
  const numString = String(number);
  let formattedNumber = '';
  let decimalCount = 0;

  for (let i = 0; i < numString.length; i++) {
    if (numString[i] === '.') {
      decimalCount = numString.length - i - 1;
      if (decimalCount > 3) {
        formattedNumber = numString.substr(0, i + 4);
      } else {
        formattedNumber = numString;
      }
      break;
    }
  }

  return formattedNumber;
};

export const reformatString = inputString => {
  const prefix = inputString.slice(0, 4);
  const suffix = inputString.slice(-5);

  return `${prefix}...${suffix}`;
};
