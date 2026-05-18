const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation successfull!");
  } else {
    reject("Operation fail!");
  }
});

// promise
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

try {
  const response = await promise;
  console.log(response);
} catch(err) {
  console.log(err);
}
