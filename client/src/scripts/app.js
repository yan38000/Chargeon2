// 👇️ named import

const { x, func } = require("joi");

//popup header
const header_popup = document.getElementById("header-popup");
const header_btn_popup = document.getElementById("header-btn-popup");


header_btn_popup.onclick = function () {
    header_popup.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == header_popup) {
      header_popup.style.display = "none";
    }
}
