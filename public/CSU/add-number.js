const inputGrid = document.querySelector(".input-grid");
const successMessage = document.querySelector("#success-greeting");
const updateAadhaarBtn = document.querySelector("#update-aadhaar");
const showcaseBoxCsu = document.querySelector(".showcase-box-csu");

showcaseBoxCsu.addEventListener("submit", (e) => {
  document.getElementsByTagName("h5")[0].style.display = "none";
  inputGrid.style.display = "none";
  successMessage.style.display = "block";
  updateAadhaarBtn.style.visibility = "hidden";

  setTimeout(() => {
    inputGrid.style.display = "grid";
    successMessage.style.display = "none";
    updateAadhaarBtn.style.visibility = "visible";
  }, 3000);
  e.preventDefault();
});
