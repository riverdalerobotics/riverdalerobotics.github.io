includeFooter();

function includeFooter() {

  var footer = document.getElementById("bottomFooter");

  var divGrid = document.createElement("div");
  divGrid.className = "grid-x grid-padding-x medium-up-2";
  footer.appendChild(divGrid);

  var left = document.createElement("div");
  left.className = "cell";
  divGrid.appendChild(left);

  var leftHeader = document.createElement("h2");
  leftHeader.appendChild(document.createTextNode("Riverdale Robotics")); //raiders
  left.appendChild(leftHeader);

  var seperator = document.createElement("hr");
  left.appendChild(seperator);

  var leftFooter = document.createElement("div");
  leftFooter.className = "left-footer-item";
  left.appendChild(leftFooter);

  var leftFooterItems = document.createElement("ul");
  leftFooter.appendChild(leftFooterItems);

  var school = document.createElement("li");
  school.appendChild(document.createTextNode("Riverdale Collegiate Institute"));
  leftFooterItems.appendChild(school);

  var address = document.createElement("li");
  address.appendChild(document.createTextNode("1094 Gerrard St E, Toronto, ON M4M 2A1"));
  leftFooterItems.appendChild(address);

  var iconList = document.createElement("ul");
  iconList.className = "icon-list";
  leftFooterItems.appendChild(iconList);

  iconList.appendChild(createIcon("social-facebook", "https://www.facebook.com/riverdalerobotics"));
  iconList.appendChild(createIcon("social-twitter", "https://twitter.com/frc5834"));
  iconList.appendChild(createIcon("social-instagram", "https://www.instagram.com/r3p2"));

  //iconList.appendChild(createIcon("mail", "contact.html"));
  iconList.appendChild(createIcon("mail", "mailto:riverdaleraidersrobotics@gmail.com"));
  iconList.appendChild(createIcon("social-github", "https://github.com/riverdalerobotics"));

  var map = document.createElement("iframe");
  map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.9787350249785!2d-79.33751888463296!3d43.669412079120804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb81dba25317%3A0x4bdebe9eb16a3739!2sRiverdale+Collegiate+Institute!5e0!3m2!1sen!2sca!4v1552596582577";
  map.frameborder="0";
  map.allowfullscreen="";

  left.appendChild(map);

  var right = document.createElement("div");
  right.className = "cell";
  divGrid.appendChild(right);

  var rightFooter = document.createElement("div");
  rightFooter.className = "right-footer-item";
  right.appendChild(rightFooter);

  var backToTop = document.createElement("a");
  backToTop.appendChild(document.createTextNode("Back To Top"));
  backToTop.className = "hollow expanded button";
  backToTop.setAttribute("onClick","backToTop()");
  rightFooter.appendChild(backToTop);

  rightFooter.appendChild(createLeftButton("Timeline", "timeline.html"));
  rightFooter.appendChild(createRightButton("About FIRST", "first.html"));
  rightFooter.appendChild(createLeftButton("Our History", "history.html"));
  rightFooter.appendChild(createRightButton("Community", "timeline.html"));
  rightFooter.appendChild(createLeftButton("Sponsors", "sponsors.html"));
  rightFooter.appendChild(createRightButton("Gallery", "gallery.html"));

}

function createIcon (iconName, iconLink) {

  var li = document.createElement("li");

  var a = document.createElement("a");
  a.href = iconLink;
  li.appendChild(a);

  var i = document.createElement("i");
  i.className = "icon fi-" + iconName;
  a.appendChild(i);

  return li;

}

function createLeftButton (text, href) {
  return createButton(text, href, "left-page-item");
}

function createRightButton (text, href) {
  return createButton(text, href, "right-page-item");
}

function createButton (text, href, extraClass) {

  var a = document.createElement("a");
  a.href = href;
  a.appendChild(document.createTextNode(text))
  a.className = "hollow " +  extraClass + " button";

  return a;

}

function backToTop() {
  $('html, body').animate({scrollTop:0}, 1500);
}

$(document).foundation()
