## Numeric Separator & BigInt

### Numeric Separator `_`
Just a visual aid for readability — JavaScript ignores it completely:
```js
const bigNumber = 9_007_199_254_740_991  // same as 9007199254740991
```

### BigInt
A special type for integers **beyond** `Number.MAX_SAFE_INTEGER`. Add `n` at the end:
```js
const bigNumber = 9_007_199_254_740_991_000n  // ✅ precise
```

> ⚠️ Prefer the `n` literal over `BigInt()` for large numbers — `BigInt(9_007_199_254_740_991_000)` loses precision **before** BigInt even gets it, because the number is first parsed as a regular `Number`.