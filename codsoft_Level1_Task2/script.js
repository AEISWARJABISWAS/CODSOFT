function opentab() {
    window.open("https://drive.google.com/file/d/1sPIezhRb0aQpyBStldRlOWX4AtF7MuUq/view?usp=sharing", "_blank");
}
function opentab1() {
    window.open("https://drive.google.com/file/d/1R7r_R5xcleTmLypT9gQReZFttNWOOMLa/view?usp=drive_link", "_blank");
}
function opentab2() {
    window.open("https://drive.google.com/file/d/1Xp3wbeJDLMNH1nCGTRllfZWXxSPKdZOF/view?usp=drive_link", "_blank");
}
function opentab3() {
    window.open("https://drive.google.com/file/d/1y-j5d3hbWGVHFD0wTFH1FQugLPDCAeCS/view?usp=drive_link", "_blank");
}
function opentab4() {
    window.open("https://drive.google.com/file/d/1UPkgNTwzYcLVE1zHF2M0oBQZn6MCTbSO/view?usp=drive_link", "_blank");
}
function opentab5() {
    window.open("https://drive.google.com/file/d/1j0skiU-kfj94s3lBUWOAzO4uxXqS9e_r/view?usp=drive_link", "_blank");
}
function opentab6() {
    window.open("https://drive.google.com/open?id=17aPaZA_C81EbHxYhieoNbR8A2YeeM34p&usp=drive_copy", "_blank");
}
function opentab7() {
    window.open("https://drive.google.com/file/d/1EVOGTHDvmOB1sLVkC1v6U7Ie0jMqjWjV/view?usp=drive_link", "_blank");
}

function toggleMenu() {
    var nav = document.querySelector(".nav");
    console.log("heloo");
    nav.style.display =
      nav.style.display === "none" || nav.style.display === "" ? "flex" : "none";
  }
  
  document.getElementById("menuToggle").addEventListener("click", toggleMenu);