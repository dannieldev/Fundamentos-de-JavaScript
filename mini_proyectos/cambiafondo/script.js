//Banner
var BannerWhite = document.getElementById('BannerWhite');
var BannerBlue = document.getElementById('BannerBlue');
var BannerGreen = document.getElementById('BannerGreen');
var BannerRed = document.getElementById('BannerRed');
var BannerYellow = document.getElementById('BannerYellow');
//Botones
var btnBlue = document.getElementById('Blue');
var btnGreen = document.getElementById('Geen');
var btnRed = document.getElementById('Red');
var btnYellow = document.getElementById('Yellow');

BannerWhite.classList.toggle('view');
BannerBlue.classList.toggle('hidden');
BannerGreen.classList.toggle('hidden');
BannerRed.classList.toggle('hidden');
BannerYellow.classList.toggle('hidden');

btnBlue.addEventListener('click', function () {
    AddRemove();
    BannerBlue.classList.toggle('view');
});

btnGreen.addEventListener('click', function () {
    AddRemove();
    BannerGreen.classList.toggle('view');
});
btnRed.addEventListener('click', function () {
    AddRemove();
    BannerRed.classList.toggle('view');
});
btnYellow.addEventListener('click', function () {
    AddRemove();
    BannerYellow.classList.toggle('view');
});



function AddRemove(){
    BannerBlue.classList.remove('view');BannerBlue.classList.add('hidden');
    BannerWhite.classList.remove('view');BannerWhite.classList.add('hidden');
    BannerGreen.classList.remove('view');BannerGreen.classList.add('hidden');
    BannerRed.classList.remove('view');BannerRed.classList.add('hidden');
    BannerYellow.classList.remove('view');BannerYellow.classList.add('hidden');
}


