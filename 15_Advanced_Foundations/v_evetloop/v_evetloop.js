// JavaScript relies on the runtime environment (browser or Node.js) for async features:
// - Web APIs (e.g., setTimeout, DOM, fetch)
// - Task Queue (also called Callback Queue)
// - Event Loop (moves tasks to the call stack when it's empty)
// Note: These are NOT part of the JavaScript language itself.

// Execution flow:

// Synchronous:
// JS → Call Stack → Console

// Asynchronous:
// JS → Call Stack → Web APIs → Task Queue → Event Loop → Call Stack → Console
// Example demonstrating async behavior:

console.log("1st");

setTimeout(function () {
  console.log("2nd");
}, 5000);

console.log("3rd");

// Expected Output:
// 1st
// 3rd
// 2nd

// JavaScript is single-threaded (one call stack),
// but can handle asynchronous operations via the event loop.

// Common async features:
// - setTimeout()
// - setInterval()
// - Network requests (Fetch API)
// - Promises

// The event loop continuously checks if the call stack is empty before pushing queued callbacks.
