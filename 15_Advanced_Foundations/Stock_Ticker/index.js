import { getStockData } from "./fakeStockAPI.js";

setInterval(function () {
  renderStockTicker(getStockData());
}, 1500);

let prevPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPriceValue = document.getElementById("price-value");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  const { name, sym, price, time } = stockData;

  const priceDirectionIcon =
    price > prevPrice
      ? "green.png"
      : price < prevPrice
        ? "red.png"
        : "grey.png";

  const priceIconElement = document.getElementById("img");
  if (priceIconElement) {
    priceIconElement.src = `icon/${priceDirectionIcon}`;
  }

  stockDisplayName.textContent = name;
  stockDisplaySymbol.textContent = sym;
  stockDisplayPriceValue.textContent = `$${price}`;
  stockDisplayTime.textContent = `Last updated: ${time}`;

  prevPrice = price;
}
