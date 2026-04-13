# JavaScript Rest Parameters

## What Are Rest Parameters?

Rest parameters let you collect **multiple arguments** into a **single array**. Use `...` before the parameter name.

---

## 1. Basic Syntax

```js
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3);       // Output: [1, 2, 3]
sum(10, 20, 30, 40); // Output: [10, 20, 30, 40]
```

> `...numbers` collects all passed arguments into an array automatically.

---

## 2. Adding All Numbers Together

```js
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

sum(1, 2, 3);        // Output: 6
sum(10, 20, 30, 40); // Output: 100
```

---

## 3. Rest + Regular Parameters Together

Rest parameter must always be **last** in the parameter list.

```js
function orderFood(restaurant, ...items) {
  console.log("Restaurant: " + restaurant);
  console.log("Items ordered: " + items);
}

orderFood("Pizza Hut", "Pizza", "Burger", "Coke");
// Output: Restaurant: Pizza Hut
// Output: Items ordered: Pizza, Burger, Coke
```

---

## 4. Rest Parameter vs Regular Arguments

```js
// ❌ Old way — arguments object (not a real array)
function oldWay() {
  console.log(arguments); // not an array
}

// ✅ New way — rest parameter (real array)
function newWay(...args) {
  console.log(args); // real array, can use .map, .filter etc
}

newWay(1, 2, 3); // Output: [1, 2, 3]
```

---

## 5. Using Array Methods with Rest Parameters

Since rest gives you a **real array**, you can use all array methods on it.

```js
function getHighScores(...scores) {
  return scores.filter(score => score >= 50);
}

getHighScores(30, 55, 20, 80, 45, 90);
// Output: [55, 80, 90]
```

---

## 6. Rest Parameter with Destructuring

```js
function showTeam(leader, ...members) {
  console.log("Leader: " + leader);
  console.log("Members: " + members);
}

showTeam("Rahim", "Karim", "Jamal", "Salam");
// Output: Leader: Rahim
// Output: Members: Karim, Jamal, Salam
```

---

## Important Rules

| Rule | Details |
|---|---|
| Only one rest param allowed | `function fn(...a, ...b)` ❌ invalid |
| Must be last | `function fn(a, b, ...rest)` ✅ |
| Returns real array | Can use `.map()` `.filter()` `.reduce()` |
| No argument passed | Returns empty array `[]` |

---

## Quick Summary

```js
// Collects all args into an array
function fn(...args) {}

// Mix with regular params — rest goes last
function fn(first, second, ...rest) {}

// Use array methods freely
function fn(...nums) {
  return nums.filter(n => n > 0);
}
```

> **Next up → Arrow Functions** `() => {}`