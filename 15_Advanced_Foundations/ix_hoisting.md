## Hoisting & Temporal Dead Zone (TDZ)

### Hoisting
JavaScript moves declarations to the top of their scope before running code.

#### `var` — hoisted and initialized as `undefined`
```js
console.log(name) // undefined (no error)
var name = 'Alice'
```

#### `function` — fully hoisted, works before declaration
```js
greet() // "Hello!" ✅
function greet() {
    console.log("Hello!")
}
```

---

### Temporal Dead Zone (TDZ)
`let` and `const` are hoisted too, but **not initialized** — accessing them before declaration throws an error:

```js
console.log(age) // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25
```

The "dead zone" is the gap between the start of the scope and the declaration line.

---

### `var` vs `let`/`const` Hoisting

```js
console.log(a) // undefined (var — hoisted + initialized)
console.log(b) // ❌ ReferenceError (let — hoisted but in TDZ)

var a = 1
let b = 2
```

---

### Quick Reference

| | Hoisted | Initialized | TDZ |
|---|---|---|---|
| `var` | ✅ | ✅ as `undefined` | ❌ No |
| `let` | ✅ | ❌ | ✅ Yes |
| `const` | ✅ | ❌ | ✅ Yes |
| `function` | ✅ | ✅ fully | ❌ No |

> 💡 **Rule of thumb:** Always declare variables before using them. Prefer `const` and `let` over `var`.