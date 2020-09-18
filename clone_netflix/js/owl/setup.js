


const maisinfobtn = document.getElementById("maisinfobtn");
const popupmain = document.getElementById("popup-main");
const xbtn = document.getElementById("xbtn");
const bgcolor = document.getElementById("bgcolor");

bgcolor.addEventListener("click", ()=>{
    popupmain.style.visibility = "hidden";
    bgcolor.style.visibility = "hidden";
})
maisinfobtn.addEventListener("click", ()=>{
    popupmain.style.visibility = "visible";
    bgcolor.style.visibility = "visible";
})

xbtn.addEventListener("click", ()=>{
    popupmain.style.visibility = "hidden";
    bgcolor.style.visibility = "hidden";
})




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})