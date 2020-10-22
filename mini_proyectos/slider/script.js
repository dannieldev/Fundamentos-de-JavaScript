var btnPrev = document.getElementById("btnPrev");
var btnNext = document.getElementById("btnNext");
var slides = document.getElementsByClassName("mainslider");
var slideIndex = 0;
btnPrev.style.display = "none";

showSlides();

function showSlides() {
       var i;
       for (i = 0; i < slides.length; i++) {
            slides[0].style.display = "block";
            slides[1].style.display = "none";
            slides[2].style.display = "none";
            slides[3].style.display = "none";
       }
}

function showNext(){
    slideIndex++;
    slides[slideIndex].style.display = "block";
    if(slideIndex == 3){
        btnNext.style.display = "none";
    } 
    if(slideIndex == 1){
        btnPrev.style.display = "block";
    }
     
}

function showPrev(){ 
    slides[slideIndex].style.display = "none";
    console.log(slideIndex);
    if(slideIndex == 3){
        btnNext.style.display = "block";
    } 
    if(slideIndex == 1){
        btnPrev.style.display = "none";
    }
    slideIndex--; 
}