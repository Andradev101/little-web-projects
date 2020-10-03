const image = document.getElementById("image");
let images = ["img/showcase_1.jpg","img/showcase_2.jpg","img/showcase_3.jpg"], i = 0;
function changephoto() {
    i<images.length-1?i+=1:i=0;
    image.src=images[i];
    image.classList.add("fadeout");

}
setInterval(changephoto, 3000);
