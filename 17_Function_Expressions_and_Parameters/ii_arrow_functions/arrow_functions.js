const getSpend = () => {
  return `Warning! You just spent some money!`;
};

console.log(getSpend());

const getSpendAmmount = (amount) => {
  return `Warning! You just spent $${amount}!`;
};

console.log(getSpendAmmount(350));

const getSpendAlert = (name, amount) => {
  return `Hey ${name}! You just spent $${amount}!`;
};

console.log(getSpendAlert("Adnan", 150));

// bottom of the line:
// - 1 parameter: brackets not needed
// 0 or 2 or MORE parameters: brackets needed


const OneLinerFunction = amount => `Warning! You just spent ${amount}!`;
console.log(OneLinerFunction(100))
// One line of code without curly brackets