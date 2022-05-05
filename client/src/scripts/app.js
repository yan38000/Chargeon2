// 👇️ named import



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


//popup msg
function showPopupMsg()
{
   var welcome = document.getElementById('popup-msg-accueil');
   welcome.style.display = 'block';
}

function hidePopupMsg()
{
   var welcome = document.getElementById('popup-msg-accueil');
   welcome.style.display = 'none';
}

function showPopupMsgParam()
{
   var welcome = document.getElementById('popup-msg');
   welcome.style.display = 'block';
}

function hidePopupMsgParam()
{
   var welcome = document.getElementById('popup-msg');
   welcome.style.display = 'none';
}