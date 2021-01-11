import AadhaarInput from "../aadhaarInp.js";
import doSomething from "./update-crime.js";

const aadhaarNoField = document.getElementById("aadhaar-no");
const optionsBtn = document.querySelector(".login-main-btn");

// adhaarNoField.value = AdhaarInput.getAdhaarNo();

aadhaarNoField.oninput = function (e) {
  AadhaarInput.setAadhaarNo(e.target.value);
};

optionsBtn.onclick = function (e) {
  // e.preventDefault();

  doSomething();

  console.log(AadhaarInput);
};
