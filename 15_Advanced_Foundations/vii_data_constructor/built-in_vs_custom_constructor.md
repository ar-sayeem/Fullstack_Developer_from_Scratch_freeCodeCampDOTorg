## Built-in vs Custom Constructors in JavaScript

### Built-in Constructors
Come with JavaScript itself: `new Array()`, `new Object()`, `new Map()`, `new Set()`, `new Date()`, `new Promise()`

```js
const date = new Date()
const arr = new Array(3)  // [empty × 3]
```

### Custom Constructors
Functions you write to create your own object blueprints:

```js
function Person(name, age) {
    this.name = name
    this.age = age
    this.greet = function() {
        console.log(`Hi, I'm ${this.name}`)
    }
}

const person1 = new Person('Alice', 25)
person1.greet()  // Hi, I'm Alice
```

### Key Differences

| | Built-in | Custom |
|---|---|---|
| Who makes it | JavaScript engine | You |
| Examples | `Date`, `Map`, `Set` | `Person`, `Car`, `Product` |
| Purpose | General use | Your specific app needs |

### Modern Alternative (Classes)
Same as custom constructors, just cleaner syntax:

```js
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`)
    }
}
```