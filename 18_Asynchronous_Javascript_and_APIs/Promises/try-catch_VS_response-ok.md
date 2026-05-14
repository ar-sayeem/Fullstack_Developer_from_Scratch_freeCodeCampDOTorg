# try/catch vs response.ok

| Feature | `try...catch` | `response.ok` |
|---|---|---|
| Purpose | Catches JavaScript/runtime errors | Checks if HTTP request was successful |
| Used For | Network failures, syntax errors, rejected promises | HTTP status validation |
| Works With | Any JS code | Only `fetch()` responses |
| Triggered When | An exception occurs | Response status is checked manually |
| Detects 404/500? | ❌ No (fetch still resolves) | ✅ Yes |
| Detects no internet? | ✅ Yes | ❌ No response exists |
| Type | Error handling mechanism | Boolean property |
| Value | Executes `catch(error)` block | `true` or `false` |
| Example Failure | Internet disconnected | Server returns 404 |
| Needed Together? | ✅ Usually yes | ✅ Usually yes |

---

## Example

```js
try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("HTTP error");
    }

    const data = await response.json();
    console.log(data);

} catch (error) {
    console.log("Something went wrong:", error);
}
```

---

## Key Idea

- `try/catch` handles technical failures
  - no internet
  - DNS failure
  - broken JSON
  - thrown errors

- `response.ok` handles HTTP status failures
  - 404
  - 500
  - 403
  - etc.

`fetch()` only rejects on network errors, not on HTTP errors.