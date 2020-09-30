const popclosebtn = document.getElementById("popclosebtn");
const popup = document.getElementById("popup");
const popmenu = document.getElementById("pop-menu");
let popopenbtn = document.getElementsByClassName("config-user-post");
const body = document.body;

//adding events
for (let i = 0; i < popopenbtn.length; i++) {
    popopenbtn[i].addEventListener("click", openpopup);
}
//funtions
function openpopup(){
    popup.style.visibility = "visible";
    popmenu.style.visibility = "visible";
    body.style.position = 'fixed';
}

popclosebtn.addEventListener("click", ()=>{
    popup.style.visibility = "hidden";
    popmenu.style.visibility = "hidden";
    body.style.position = 'initial';
    console.log("why?");

})
popup.addEventListener("click", ()=>{
    popup.style.visibility = "hidden";
    popmenu.style.visibility = "hidden";
    body.style.position = 'initial';

})