function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.alt = "GLx Player 1";
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", () => reject("img NOT loaded!"));
  });
}

try {
  const result = await preLoadImg(
    "https://raw.githubusercontent.com/ar-sayeem/little-storage/main/Images/GLx/p1.png",
  );
  console.log(result);
  document.getElementById("img-container").appendChild(result);
} catch (error) {
  console.log(error);
}
