# Advanced JS Foundations

---

## SECTION 2: LOOPS

A **loop** runs a block of code **repeatedly** until a condition is met.
They save you from writing the same code over and over.

---

## The `for` Loop

The most common loop. Best used when you **know how many times** you want to repeat.

**Syntax:**
```js
for (start; condition; step) {
  // code to repeat
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4
```

**Breaking it down:**
- `let i = 0` → start at 0
- `i < 5` → keep going while i is less than 5
- `i++` → add 1 after each loop

---

### Looping Through an Array with `for`

```js
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// apple
// banana
// mango
```

---

## The `while` Loop

Repeats code **as long as a condition is true**. Best used when you **don't know in advance** how many times to loop.

```js
let count = 0;

while (count < 4) {
  console.log("Count is: " + count);
  count++;
}
// Output:
// Count is: 0
// Count is: 1
// Count is: 2
// Count is: 3
```

> ⚠️ Always make sure the condition eventually becomes `false`, or you'll create an **infinite loop** that crashes the browser!

---

### `do...while` Loop

Similar to `while`, but always runs **at least once** — even if the condition is false from the start.

```js
let num = 10;

do {
  console.log("Number is: " + num);
  num++;
} while (num < 3);

// Output: Number is: 10
// (runs once even though 10 is not less than 3)
```

---

## The `for...of` Loop

The cleanest way to loop through **arrays** (or any iterable like strings).
You get the **value directly** — no index needed.

```js
const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// mango
```

Works on strings too:

```js
const word = "Hello";

for (const letter of word) {
  console.log(letter);
}
// Output: H e l l o (each on a new line)
```

---

## The `for...in` Loop

Used to loop through the **keys** of an **object**.

```js
const person = { name: "Alice", age: 25, city: "Dhaka" };

for (const key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 25
// city: Dhaka
```

> ⚠️ Avoid using `for...in` on arrays — use `for...of` or `forEach` for arrays instead.

---

## `break` and `continue`

These give you extra control inside any loop.

### `break` — Exit the loop completely

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Stop when i reaches 5
  console.log(i);
}
// Output: 0 1 2 3 4
```

### `continue` — Skip the current iteration and move to the next

```js
for (let i = 0; i < 6; i++) {
  if (i === 3) continue; // Skip 3
  console.log(i);
}
// Output: 0 1 2 4 5
```

---

## Loops Quick Reference

| Loop | Best used for |
|---|---|
| `for` | Known number of repetitions |
| `while` | Repeat while a condition is true |
| `do...while` | Run at least once, then check condition |
| `for...of` | Loop through array/string values |
| `for...in` | Loop through object keys |
| `break` | Exit a loop early |
| `continue` | Skip current iteration |

---

## Putting It All Together — A Real Example

Using an array, array methods, and a loop together:

```js
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob",   score: 42 },
  { name: "Sara",  score: 91 },
  { name: "John",  score: 55 }
];

// Filter students who passed (score >= 60)
const passed = students.filter(function(student) {
  return student.score >= 60;
});

// Print each passing student
for (const student of passed) {
  console.log(student.name + " passed with a score of " + student.score);
}

// Output:
// Alice passed with a score of 85
// Sara passed with a score of 91
```

---

## Full Summary

### Loops
- **`for`** → count-based repetition
- **`while` / `do...while`** → condition-based repetition
- **`for...of`** → clean array/string iteration
- **`for...in`** → object key iteration
- **`break` / `continue`** → loop control