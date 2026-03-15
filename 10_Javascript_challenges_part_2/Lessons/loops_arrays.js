let bestCountries = [
  "Switzerland",
  "Japan",
  "United States",
  "Canada",
  "Australia",
];
console.log(
  'Based on the 2024 "Best Countries" ranking by U.S. News & World Report:',
);
for (let country = 0; country < bestCountries.length; country++) {
  console.log(country + 1 + ". " + bestCountries[country]);
}
