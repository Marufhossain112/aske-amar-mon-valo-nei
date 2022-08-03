function clickMe() {
  for (let i = 1; i <= 39; i++) {
    console.log("aske amar mon valo nei");
  }
}
// clickMe();

// adding addEventListener
let getBtn = document.getElementById("click-btn");
getBtn.addEventListener("click", function () {
  // clickMe();
  let showTxt = getBtn.innerText;
  for(let i = 1; i<=33;i++){
    showTxt = "aske amar mon valo nei";
    // console.log(showTxt);
    getBtn.innerText = showTxt;
  }
});
