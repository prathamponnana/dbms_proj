document.querySelector(".showcase-box").addEventListener("submit", (e) => {
    document.getElementsByClassName("input-grid")[0].style.display = "none";
    document.getElementsByClassName("input-grid")[1].style.display = "none";
    document.getElementsByClassName("primary-submit-btn")[0].style.display = "none";
    document.getElementsByClassName("primary-submit-btn")[1].style.display = "none";
    document.getElementsByTagName("h5")[0].style.display = "none";
    document.getElementsByTagName("h5")[1].style.display = "none";
    document.querySelector("#success-greeting").style.display = "block";
    e.preventDefault();
  
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  });