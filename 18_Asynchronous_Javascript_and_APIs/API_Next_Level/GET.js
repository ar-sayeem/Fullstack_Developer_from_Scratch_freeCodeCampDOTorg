try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"});

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
}
