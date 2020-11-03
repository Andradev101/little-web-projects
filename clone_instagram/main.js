var imgs = document.querySelectorAll('#phone-content img'), i=0;
console.log(imgs);

Array.prototype.forEach.call(imgs, function(img){
	setTimeout(function (){img.classlist.add('.fadeout')}, 700*i)
	i++;
})