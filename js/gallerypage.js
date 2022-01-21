var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var i = 1;

var a;

var page = getQueryVariable("page");

var myInterval = setInterval(loadImage, 1);

function loadImage() {

    if (bFinishCheck) {
        clearInterval(myInterval);
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;

        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = page + '/image (' + i + ').JPG';
        img.className = "gallery-image shadow";

        a = document.createElement("a");
        a.href = page + '/image (' + i + ').JPG';
        a.target= "_blank";
        a.appendChild(img);


    }

}

function fExists() {
    document.getElementById("gallery-page").appendChild(a);
    i++;
    bCheckEnabled = true;
}

function fDoesntExist() {
    bFinishCheck = true;
}

function getQueryVariable(variable)
{
  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  var c = url.searchParams.get(variable);
  console.log(c);
  if (c==null) {
    c = "images/competition-history/" + script_tag.getAttribute("data-comp-year") + "/mini-gallery";
  } else {
    c = 'images/gallery/gallery-pages/' + c;
  }
  return c;
}
