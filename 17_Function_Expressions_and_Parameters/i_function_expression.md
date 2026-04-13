# Advanced JS Foundations

## Part 1: Function Expressions & Parameters

---

### What is a Function Declaration? (Quick Recap)

Before understanding function expressions, let's recall the classic way to write a function:

```js
function greet() {
  console.log("Hello!");
}

greet(); // Output: Hello!
```

This is a **function declaration**. The function has a name and is defined using the `function` keyword at the start of the line.

---

### What is a Function Expression?

A **function expression** is when you store a function inside a variable.

```js
const greet = function() {
  console.log("Hello!");
};

greet(); // Output: Hello!
```

Instead of declaring a named function, you create a function and assign it to a variable like `greet`. The function itself has no name — it is called an **anonymous function**.

---

### Function Declaration vs Function Expression

| Feature | Function Declaration | Function Expression |
|---|---|---|
| Syntax | `function greet() {}` | `const greet = function() {}` |
| Has a name? | Yes | Usually no (anonymous) |
| Hoisted? | Yes | No |
| Stored in variable? | No | Yes |

> **Hoisting** means JavaScript moves declarations to the top before running code.
> Function declarations can be called *before* they appear in the code.
> Function expressions **cannot** — you must define them first.

```js
// This works (declaration is hoisted):
sayHi();
function sayHi() {
  console.log("Hi!");
}

// This FAILS (expression is NOT hoisted):
sayBye(); // Error!
const sayBye = function() {
  console.log("Bye!");
};
```

---

### Named Function Expressions

A function expression can also have a name. This is called a **named function expression**.

```js
const greet = function sayHello() {
  console.log("Hello!");
};

greet();     // Output: Hello!
sayHello();  // Error! The name only exists inside the function itself
```

The name `sayHello` is only available **inside** the function. It's mainly used for debugging or recursion.

---

### What are Parameters?

**Parameters** are placeholders you define in a function. When you call the function, you pass actual values — called **arguments** — into those placeholders.

```js
function greet(name) {    // 'name' is the parameter
  console.log("Hello, " + name + "!");
}

greet("Alice");   // 'Alice' is the argument → Output: Hello, Alice!
greet("Bob");     // Output: Hello, Bob!
```

Think of parameters like empty boxes 📦. Arguments are the values you put inside those boxes.

---

### Parameters in Function Expressions

Parameters work exactly the same way in function expressions:

```js
const add = function(a, b) {
  return a + b;
};

console.log(add(3, 5));  // Output: 8
console.log(add(10, 2)); // Output: 12
```

---

### Multiple Parameters

You can have as many parameters as you need, separated by commas:

```js
const introduce = function(name, age, city) {
  console.log("My name is " + name + ", I am " + age + " years old, from " + city + ".");
};

introduce("Sara", 25, "Dhaka");
// Output: My name is Sara, I am 25 years old, from Dhaka.
```

---

### What Happens If You Pass Too Few or Too Many Arguments?

JavaScript does **not** throw an error if the number of arguments doesn't match the parameters.

```js
const showInfo = function(name, age) {
  console.log(name); // Output: Alice
  console.log(age);  // Output: undefined (no value passed)
};

showInfo("Alice"); // Only 1 argument passed, but 2 parameters exist
```

- Too few arguments → missing ones become `undefined`
- Too many arguments → extras are **ignored** (unless you use rest parameters, covered later)

---

### Returning Values from Function Expressions

Use the `return` keyword to send a value back from the function:

```js
const multiply = function(x, y) {
  return x * y;
};

const result = multiply(4, 5);
console.log(result); // Output: 20
```

Once `return` runs, the function **stops immediately**. Any code after `return` is ignored.

---

### Storing and Passing Functions as Values

One of the biggest advantages of function expressions is that functions can be stored, passed, and used just like any other value:

```js
const square = function(n) {
  return n * n;
};

// Passing a function as an argument to another function
function runMath(num, operation) {
  return operation(num);
}

console.log(runMath(6, square)); // Output: 36
```

This is a very powerful concept in JavaScript. Functions treated this way are called **first-class functions**.

---

### Quick Summary

| Concept | What it means |
|---|---|
| Function Expression | A function stored inside a variable |
| Anonymous Function | A function with no name |
| Named Function Expression | A function expression with an internal name |
| Parameter | A placeholder variable in the function definition |
| Argument | The actual value you pass when calling the function |
| `return` | Sends a value back from the function |
| Hoisting | Function declarations load early; expressions do not |

---

### What's Next?

- **Arrow Functions** → A shorter way to write function expressions
- **Default Parameters** → Set a fallback value when no argument is passed
- **Rest Parameters** → Handle an unlimited number of arguments