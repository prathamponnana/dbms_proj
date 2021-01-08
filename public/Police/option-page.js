var aadhaarNo;
document.addEventListener("click", (e) => {
  if (e.target.className == "login-main-btn") {
    aadhaarNo = document.getElementById("aadhaar-no").value;
    console.log(aadhaarNo);
    adhNo(aadhaarNo)
  }
});

export function adhNo(aadhaarNo) {
  return aadhaarNo;
}
