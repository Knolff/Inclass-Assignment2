function toggleImage(letter) {
  const container = document.getElementById(`${letter}-container`).getElementsByClassName("img-container")[0]; ; 
  const hideButton = document.getElementById(`${letter}-hide-button`);

  if (container.style.display === "none" || container.style.display === "") {
    // shows the container
    container.style.display = "block";
  } else {
    // hides the container
    container.style.display = "none";
  }
}
