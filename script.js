function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Close the pop-up when clicked outside of it
window.addEventListener("click", (event) => {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    closePopup();
  }
});
