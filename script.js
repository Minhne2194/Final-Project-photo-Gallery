function upDate(previewPic) {
  console.log("Event triggered: Displaying image");
  const displayDiv = document.getElementById("image");
  
  displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  displayDiv.textContent = previewPic.alt;
}

function unDo() {
  const displayDiv = document.getElementById("image");
  
  displayDiv.style.backgroundImage = "url('')";
  displayDiv.textContent = "Hover over or tab to an image below to display here.";
}

function initializeGallery() {
  console.log("Page loaded: Initializing tabindex for gallery images");
  
  const images = document.querySelectorAll(".preview");
  
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}