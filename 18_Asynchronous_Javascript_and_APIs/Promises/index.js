// fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("The operation completed."));

try {
  const response = fetch(
    "https://apis.scrimba.com/dog.ceo/api/breeds/image/random",
  );
  if (!response.ok) {
    throw new Error("There was a  problem with the API!");
  }

  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
  throw new Error("This is a network error!");
} finally {
  console.log("The operation completed.");
}
