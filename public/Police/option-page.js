export function abc() {
  var aadhaarNo;
  document.addEventListener("click", (e) => {
    if (e.target.className == "login-main-btn") {
      aadhaarNo = document.getElementById("aadhaar-no").value;
      console.log(aadhaarNo);
    }
  });
  return aadhaarNo;
}

export function adhNo(){
  return aadhaarNo;
}

