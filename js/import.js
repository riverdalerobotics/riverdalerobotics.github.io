
var script_tag = document.getElementById('import')
var title_text = script_tag.getAttribute("data-title");
var blog = script_tag.getAttribute("data-blog");

headImport ();

function headImport() {

  if (blog != null) {
    blog = true
    prefix = "../"
  } else {
    prefix = ""
  }


  var head = document.getElementsByTagName("head")[0];

  var meta1 = document.createElement("meta");
  meta1.charset="utf-8";
  head.appendChild(meta1);

  var meta2 = document.createElement("meta");
  meta2.setAttribute("http-equiv","x-ua-compatible");
  meta2.content="x-ua-compatible";
  head.appendChild(meta2);

  var meta3 = document.createElement("meta");
  meta3.name="viewport";
  meta3.content="width=device-width, initial-scale=1.0"
  head.appendChild(meta3);

  var link1 = document.createElement("link");
  link1.href="https://fonts.googleapis.com/css?family=Roboto:300,400,700|Roboto+Condensed:400,700";
  link1.rel="stylesheet";
  head.appendChild(link1);

  var link2 = document.createElement("link");
  link2.href=prefix+"css/foundation.css";
  link2.rel="stylesheet";
  head.appendChild(link2);

  var link3 = document.createElement("link");
  link3.href=prefix+"css/app.css";
  link3.rel="stylesheet";
  head.appendChild(link3);

  var link4 = document.createElement("link");
  link4.href=prefix+"foundation-icons/foundation-icons.css";
  link4.rel="stylesheet";
  head.appendChild(link4);

  var link5 = document.createElement("link");
  link5.href=prefix+"images/favicon.ico";
  link5.rel="icon";
  head.appendChild(link5);

  var title = document.createElement("title");
  title.appendChild(document.createTextNode("R3P2 | " + title_text));
  head.appendChild(title);

}
