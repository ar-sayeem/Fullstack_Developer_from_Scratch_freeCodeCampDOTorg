# JavaScript Default Parameters

## 1. Basic Default Parameter

When no value is passed, the default value steps in automatically.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet();        // Output: Hello, Guest!
```

---

## 2. Without Default vs With Default

```js
// ❌ Without Default
function add(a, b) {
  return a + b;
}
add(5); // Output: NaN  (5 + undefined)

// ✅ With Default
function add(a, b = 10) {
  return a + b;
}
add(5);    // Output: 15
add(5, 3); // Output: 8  (default ignored)
```

---

## 3. Multiple Default Parameters

Always put parameters **with** defaults after parameters **without** defaults.

```js
function createProfile(name, age = 18, country = "Unknown") {
  console.log(name + " | Age: " + age + " | Country: " + country);
}

createProfile("Rahim");           // Rahim | Age: 18 | Country: Unknown
createProfile("Karim", 25);       // Karim | Age: 25 | Country: Unknown
createProfile("Jamal", 30, "BD"); // Jamal | Age: 30 | Country: BD
```

---

## 4. `undefined` Triggers Default — `null` Does NOT

```js
function showColor(color = "Blue") {
  console.log(color);
}

showColor();           // Output: Blue  ✅ missing → uses default
showColor(undefined);  // Output: Blue  ✅ undefined → uses default
showColor(null);       // Output: null  ❌ null is a real value
showColor("Red");      // Output: Red   ❌ real value → default ignored
```

---

## 5. Math Expression as a Default

Parameters are read **left to right** — so `tax` can use `price` in its default.

```js
function calculateTotal(price = 100, tax = price * 0.1) {
  return price + tax;
}

calculateTotal();      // Output: 110
calculateTotal(200);   // Output: 220
calculateTotal(50, 5); // Output: 55
```

---

## 6. Function Call as a Default

The default function only runs **if** no value is passed.

```js
function getDefaultName() {
  return "Anonymous";
}

function registerUser(name = getDefaultName()) {
  console.log("Registered: " + name);
}

registerUser("Rahim"); // Output: Registered: Rahim
registerUser();        // Output: Registered: Anonymous
```

---

## 7. Destructuring + Default Parameters

The `= {}` at the end protects the function when nothing at all is passed.

```js
function startServer({ port = 3000, host = "localhost" } = {}) {
  console.log("Running at http://" + host + ":" + port);
}

startServer({ port: 8080 }); // Running at http://localhost:8080
startServer();               // Running at http://localhost:3000
```

---

## Quick Summary

| Concept | Example |
|---|---|
| Basic default | `function fn(x = 5)` |
| Skips if value given | `fn(10)` → uses `10` |
| `undefined` uses default | `fn(undefined)` → uses `5` |
| `null` skips default | `fn(null)` → uses `null` |
| Expression as default | `function fn(a, b = a * 2)` |
| Function as default | `function fn(name = getName())` |
| Destructuring | `function fn({ x = 1 } = {})` |

> **Next up → Rest Parameters** `(...args)`