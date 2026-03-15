let largeCountries = [
  "Brazil – 8.5 million km²",
  "Canada – 9.98 million km²",
  "China – 9.6 million km²",
  "United States – 9.5 million km²",
  "Russia – 17.1 million km",
];
// // remove last item (Russia)
let russia = largeCountries.pop();

// remove first item (Brazil)
let brazil = largeCountries.shift();

// add Russia to start
largeCountries.unshift(russia);

// add Brazil to end
largeCountries.push(brazil);

console.log("Largest Countries:");
console.log(largeCountries);
