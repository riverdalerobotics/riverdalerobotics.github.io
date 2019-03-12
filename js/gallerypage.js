var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;

var myInterval = setInterval(loadImage, 1);

function loadImage() {

    if (bFinishCheck) {
        clearInterval(myInterval);
        imagesToDOM();
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;

        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'images/gallery/gallery-pages/test/image' + i + '.png';
        img.className = "gallery-image";

    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
}

function fDoesntExist() {
    bFinishCheck = true;
}

function imagesToDOM () {
  imgArray.forEach(function(element) {
    document.getElementById("gallery-page").appendChild(element);
  });
}
