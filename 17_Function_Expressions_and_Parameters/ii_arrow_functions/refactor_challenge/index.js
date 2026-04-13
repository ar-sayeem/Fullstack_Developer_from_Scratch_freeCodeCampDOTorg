import { itemsBoughtArr } from "./itemBoughtArr.js";

function calculateTotalCost(itemsBoughtArr, discount) {
  if (!discount) {
    discount = 0;
  }
  const total = itemsBoughtArr.reduce(
    (total, currentItem) => total + currentItem.priceUSD,
    0,
  );
  return total - discount;
}

console.log(calculateTotalCost(itemsBoughtArr));
