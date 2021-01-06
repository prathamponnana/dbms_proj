const inputGrid = document.querySelector(".input-grid");
const successMessage = document.querySelector("#success-greeting");
const updateAadhaarBtn = document.querySelector("#update-aadhaar");
const showcaseBoxCsu = document.querySelector(".showcase-box-csu");

showcaseBoxCsu.addEventListener("submit", (e) => {
  document.getElementsByTagName("h5")[0].style.display = "none";
  inputGrid.style.display = "none";
  successMessage.style.display = "block";
  updateAadhaarBtn.style.visibility = "hidden";

  const adhNo = document.getElementsByClassName("main-inp")[0].value;
  const name = document.getElementsByClassName("main-inp")[1].value;
  const dob = document.getElementsByClassName("main-inp")[2].value;
  const gender = document.getElementsByClassName("main-inp")[3].value;
  const place = document.getElementsByClassName("main-inp")[4].value;
  const phone = document.getElementsByClassName("main-inp")[5].value;
  console.log(adhNo, name, dob, gender, place, phone);

  const person = { adhNo, name, dob, gender, place, phone };
  console.log(person);

  fetch(`/api/saveperson`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  })
    .then((res) => {
      console.log(res.status);
      res.json();
    })
    .then((per) => console.log(per))
    .catch((err) => console.log("Error:",err));

  setTimeout(() => {
    window.location.reload();
  }, 3000);
  e.preventDefault();
});
