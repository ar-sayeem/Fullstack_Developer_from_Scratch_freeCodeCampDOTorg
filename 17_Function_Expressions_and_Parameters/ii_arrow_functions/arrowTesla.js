const speedWarning = (limit, speed) => {
  if (speed > limit) {
    return `Bruh! Slow down, you're at ${speed} mph!`;
  } else {
    return `Speed up boy! The road is for ${limit} mph!`;
  }
};
console.log(speedWarning(80, 300));

const distanceTraveledMiles = [267, 345, 321, 343, 234];

// const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
//   return Math.round(distance * 1.6)
// })

const distanceTraveledKm = distanceTraveledMiles.map((distance) =>
  Math.round(distance * 1.6),
);

console.log(distanceTraveledKm);
