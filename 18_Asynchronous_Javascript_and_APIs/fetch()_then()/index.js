fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    const imageElement = document.getElementById("img");
    imageElement.src = data.message;
    imageElement.alt = "random dog picture";
    document.getElementById("img-container").appendChild(imageElement);
  });
