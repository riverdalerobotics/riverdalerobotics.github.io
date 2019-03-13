var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;

var page = getQueryVariable("page");

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
        img.src = 'images/gallery/gallery-pages/' + page + '/image (' + i + ').JPG';
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

function getQueryVariable(variable)
{
  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  var c = url.searchParams.get(variable);
  return c;
}
