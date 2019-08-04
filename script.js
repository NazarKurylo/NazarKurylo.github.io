var slideIndex = 1;
var arrImg = document.getElementsByClassName("container-item");
showImg(slideIndex);

function nextImg(n){
	showImg(slideIndex += n);
}
function showImg(n){
	if(n > arrImg.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = arrImg.length;
	}
	for(var i = 0; i < arrImg.length; i++){
		arrImg[i].style.display = "none";
	}
	arrImg[slideIndex - 1].style.display = "block";
}