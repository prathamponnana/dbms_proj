import {abc} from './option-page.js';
console.log(abc.call());

document.querySelector(".showcase-box").addEventListener("submit", (e) => {
  document.querySelector(".add-crime-flex").style.display = "none";
  document.querySelector(".update-crime-flex").style.display = "none";
  document.getElementsByClassName("primary-submit-btn")[0].style.display = "none";
  document.getElementsByClassName("primary-submit-btn")[1].style.display = "none";
  document.getElementsByTagName("h5")[0].style.display = "none";
  document.getElementsByTagName("h5")[1].style.display = "none";
  document.querySelector("#success-greeting").style.display = "block";
  e.preventDefault();

  console.log(e.target);
  console.log(e.target.value);
  console.log(e.target.id);

  setTimeout(() => {
    window.location.reload();
  }, 3000);
});
