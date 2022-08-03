function clickMe() {
  for (let i = 1; i <= 39; i++) {
    // console.log("aske amar mon valo nei");
  }
}
// clickMe();

// adding addEventListener
let getBtn = document.getElementById("click-btn");
getBtn.addEventListener("click", function () {
  // clickMe();
  // let showTxt = getBtn.innerText;
  for (let i = 1; i <= 9999999999; i++) {
    // showTxt = "aske amar mon valo nei";
    // console.log(showTxt);
    let createBtn = document.createElement("button");
    createBtn.innerHTML = "aske amar mon valo nei";
    getBtn.innerText = createBtn.innerHTML;
    document.write(createBtn.innerHTML + "<br/>");
  }
});
