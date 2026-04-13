# Advanced JS Foundations

---

## SECTION 1: METHODS

A **method** is simply a function that belongs to something — a string, an array, or an object.
You call a method using a dot: `something.methodName()`

---

## String Methods

A **string** is any text wrapped in quotes. String methods let you work with and manipulate text.

---

### `.length`
Not a method but a **property** — returns the number of characters in a string.

```js
const name = "Alice";
console.log(name.length); // Output: 5
```

---

### `.toUpperCase()` and `.toLowerCase()`
Converts a string to all uppercase or all lowercase.

```js
const word = "Hello";
console.log(word.toUpperCase()); // Output: HELLO
console.log(word.toLowerCase()); // Output: hello
```

---

### `.trim()`
Removes extra spaces from the **beginning and end** of a string.

```js
const messy = "   hello world   ";
console.log(messy.trim()); // Output: "hello world"
```

---

### `.includes()`
Checks if a string **contains** a certain word or character. Returns `true` or `false`.

```js
const sentence = "I love JavaScript";
console.log(sentence.includes("love"));       // Output: true
console.log(sentence.includes("Python"));     // Output: false
```

---

### `.indexOf()`
Returns the **position** (index) where a word or character first appears.
Returns `-1` if not found.

```js
const text = "Hello World";
console.log(text.indexOf("World")); // Output: 6
console.log(text.indexOf("bye"));   // Output: -1
```

---

### `.slice(start, end)`
Cuts out a **portion** of a string. The `start` index is included, the `end` index is not.

```js
const str = "JavaScript";
console.log(str.slice(0, 4));  // Output: Java
console.log(str.slice(4));     // Output: Script (no end = goes to finish)
```

---

### `.replace(old, new)`
Replaces the **first match** of a word with a new one.

```js
const msg = "I like cats";
console.log(msg.replace("cats", "dogs")); // Output: I like dogs
```

---

### `.split(separator)`
Splits a string into an **array** of pieces, divided by the separator you choose.

```js
const fruits = "apple,banana,mango";
console.log(fruits.split(",")); // Output: ["apple", "banana", "mango"]

const sentence = "Hello World";
console.log(sentence.split(" ")); // Output: ["Hello", "World"]
```

---

### String Methods Quick Reference

| Method | What it does |
|---|---|
| `.length` | Returns number of characters |
| `.toUpperCase()` | Converts to UPPERCASE |
| `.toLowerCase()` | Converts to lowercase |
| `.trim()` | Removes leading/trailing spaces |
| `.includes()` | Checks if text exists → true/false |
| `.indexOf()` | Finds position of text |
| `.slice(s, e)` | Extracts part of a string |
| `.replace(a, b)` | Replaces first match |
| `.split(sep)` | Splits string into array |

---
---

## Array Methods

An **array** is a list of values stored in a single variable: `const fruits = ["apple", "banana", "mango"]`

Array indexes start at `0`. So `fruits[0]` is `"apple"`, `fruits[1]` is `"banana"`, and so on.

---

### `.length`
Returns how many items are in the array.

```js
const colors = ["red", "green", "blue"];
console.log(colors.length); // Output: 3
```

---

### `.push()` and `.pop()`
- `.push()` adds an item to the **end** of the array
- `.pop()` removes the item from the **end**

```js
const animals = ["cat", "dog"];

animals.push("bird");
console.log(animals); // Output: ["cat", "dog", "bird"]

animals.pop();
console.log(animals); // Output: ["cat", "dog"]
```

---

### `.unshift()` and `.shift()`
- `.unshift()` adds an item to the **beginning**
- `.shift()` removes the item from the **beginning**

```js
const nums = [2, 3, 4];

nums.unshift(1);
console.log(nums); // Output: [1, 2, 3, 4]

nums.shift();
console.log(nums); // Output: [2, 3, 4]
```

---

### `.includes()`
Checks if an array **contains** a specific value. Returns `true` or `false`.

```js
const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // Output: true
console.log(fruits.includes("grape"));  // Output: false
```

---

### `.indexOf()`
Returns the **index (position)** of an item. Returns `-1` if not found.

```js
const fruits = ["apple", "banana", "mango"];
console.log(fruits.indexOf("mango"));  // Output: 2
console.log(fruits.indexOf("grape"));  // Output: -1
```

---

### `.join(separator)`
Joins all array items into a **single string**.

```js
const words = ["Hello", "World", "JS"];
console.log(words.join(" "));  // Output: Hello World JS
console.log(words.join("-"));  // Output: Hello-World-JS
```

---

### `.reverse()`
Reverses the order of the array **in place** (modifies the original).

```js
const nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // Output: [5, 4, 3, 2, 1]
```

---

### `.slice(start, end)`
Returns a **copy** of part of the array. Does NOT change the original.

```js
const fruits = ["apple", "banana", "mango", "grape"];
console.log(fruits.slice(1, 3)); // Output: ["banana", "mango"]
console.log(fruits.slice(2));    // Output: ["mango", "grape"]
```

---

### `.splice(start, deleteCount, ...items)`
**Removes**, **replaces**, or **inserts** items at any position. This DOES change the original array.

```js
const colors = ["red", "green", "blue"];

// Remove 1 item at index 1
colors.splice(1, 1);
console.log(colors); // Output: ["red", "blue"]

// Insert "yellow" at index 1 without removing anything
colors.splice(1, 0, "yellow");
console.log(colors); // Output: ["red", "yellow", "blue"]
```

---

### `.forEach()`
Runs a function **once for every item** in the array. Used when you just want to *do something* with each item.

```js
const fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// apple
// banana
// mango
```

---

### `.map()`
Creates a **new array** by transforming every item. The original array is NOT changed.

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8]
```

---

### `.filter()`
Creates a **new array** with only the items that **pass a condition**.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6]
```

---

### `.find()`
Returns the **first item** that matches a condition. Returns `undefined` if nothing matches.

```js
const ages = [12, 18, 25, 30];

const firstAdult = ages.find(function(age) {
  return age >= 18;
});

console.log(firstAdult); // Output: 18
```

---

### `.some()` and `.every()`
- `.some()` → returns `true` if **at least one** item passes the condition
- `.every()` → returns `true` if **all** items pass the condition

```js
const nums = [1, 3, 5, 8];

console.log(nums.some(n => n % 2 === 0));  // Output: true  (8 is even)
console.log(nums.every(n => n % 2 === 0)); // Output: false (not all are even)
```

---

### Array Methods Quick Reference

| Method | What it does |
|---|---|
| `.length` | Count of items |
| `.push()` | Add to end |
| `.pop()` | Remove from end |
| `.unshift()` | Add to beginning |
| `.shift()` | Remove from beginning |
| `.includes()` | Check if item exists → true/false |
| `.indexOf()` | Find position of item |
| `.join()` | Join items into a string |
| `.reverse()` | Reverse the array |
| `.slice(s, e)` | Copy part of array |
| `.splice()` | Add/remove at any position |
| `.forEach()` | Loop through, do something |
| `.map()` | Transform every item → new array |
| `.filter()` | Keep items that pass a condition |
| `.find()` | Get first matching item |
| `.some()` | At least one passes? |
| `.every()` | Do all pass? |

---
---

## Object Methods

An **object** stores data as **key-value pairs**:

```js
const person = {
  name: "Alice",
  age: 25,
  city: "Dhaka"
};
```

You access values with `person.name` or `person["name"]`.

---

### Adding a Method to an Object

You can store a function inside an object. That function is then called a **method**.

```js
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hi, my name is " + person.name);
  }
};

person.greet(); // Output: Hi, my name is Alice
```

---

### Using `this` Inside Object Methods

Inside an object method, `this` refers to **the object itself**. This is the proper way to access the object's own properties.

```js
const person = {
  name: "Bob",
  age: 30,
  introduce: function() {
    console.log("I am " + this.name + " and I am " + this.age + " years old.");
  }
};

person.introduce(); // Output: I am Bob and I am 30 years old.
```

---

### `Object.keys()`
Returns an array of all the **keys** (property names) in an object.

```js
const car = { brand: "Toyota", year: 2020, color: "red" };
console.log(Object.keys(car)); // Output: ["brand", "year", "color"]
```

---

### `Object.values()`
Returns an array of all the **values** in an object.

```js
const car = { brand: "Toyota", year: 2020, color: "red" };
console.log(Object.values(car)); // Output: ["Toyota", 2020, "red"]
```

---

### `Object.entries()`
Returns an array of **[key, value] pairs**.

```js
const car = { brand: "Toyota", year: 2020 };
console.log(Object.entries(car));
// Output: [["brand", "Toyota"], ["year", 2020]]
```

---

### Object Methods Quick Reference

| Method | What it does |
|---|---|
| `obj.method()` | Call a function stored in an object |
| `this` | Refers to the current object |
| `Object.keys(obj)` | Get all keys as an array |
| `Object.values(obj)` | Get all values as an array |
| `Object.entries(obj)` | Get all [key, value] pairs |

---
---

## Full Summary

### Methods
- **String methods** → work with and manipulate text
- **Array methods** → manage lists and transform data
- **Object methods** → store functions in objects and work with key-value data