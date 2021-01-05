document.addEventListener('click', e=>{
    if(e.target.className == 'login-main-btn'){
        const aadhaarNo = document.getElementById("aadhaar-no").value;
        console.log(aadhaarNo);
    }
});