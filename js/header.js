
var script_tag = document.getElementById('import')
var blog = script_tag.getAttribute("data-blog");

if (blog != null) {
  blog = true
  prefix = "../"
} else {
  prefix = ""
}

includeHeader();

function includeHeader () {

  var navBar = document.getElementById("navbar");

  var anchor = document.createElement("a")
  anchor.href = prefix + "index.html"
  navBar.appendChild(anchor);

  var leftBar = document.createElement("div")
  leftBar.className = "top-bar-left"
  anchor.appendChild(leftBar);

  var leftDropDownList = document.createElement("ul");
  leftDropDownList.className = "dropdown menu";
  leftDropDownList.setAttribute("data-dropdown-menu","");
  leftBar.appendChild(leftDropDownList);

  var logo = document.createElement("img");
  logo.src = prefix + "images/r3p2-logo-white.png";
  leftDropDownList.appendChild(logo);

  var title = document.createElement("li");
  title.className = "menu-text";
  title.appendChild(document.createTextNode("Riverdale Raiders Robotics"));
  leftDropDownList.appendChild(title);

  var rightBar = document.createElement("div")
  rightBar.className = "top-bar-right"
  navBar.appendChild(rightBar);

  var rightDropDownMenu = document.createElement("ul");
  rightDropDownMenu.className = "dropdown menu";
  rightDropDownMenu.setAttribute("data-dropdown-menu","");
  rightBar.appendChild(rightDropDownMenu);

  teamMenu = createMenu (rightDropDownMenu, "Team", "#");

  addItem(teamMenu, "Who are we", "about.html");
  addItem(teamMenu, "Executive Team", "exec.html");
  addItem(teamMenu, "History", "history.html");
  addItem(teamMenu, "Mentors", "mentors.html");

  var competitionMenu = createMenu (rightDropDownMenu, "Competition", "competition.html");

  addItem(competitionMenu, "About First", "first.html");
  addItem(competitionMenu, "2019", "deep-space.html");
  addItem(competitionMenu, "2018", "power-up.html");
  addItem(competitionMenu, "2017", "steamworks.html");
  addItem(competitionMenu, "2016", "stronghold.html");

  addItem (rightDropDownMenu, "Timeline", "timeline.html");
  addItem (rightDropDownMenu, "Sponsors", "sponsors.html");
  addItem (rightDropDownMenu, "Gallery", "gallery.html");

}

function createMenu (menu, headTitle, headHREF) {

  var listItem = addItem(menu, headTitle, headHREF);

  var menu = document.createElement("ul");
  menu.className = "menu vertical";
  listItem.appendChild(menu);

  return menu

}

function addItem(menu, text, href) {

  var listItem = document.createElement("li");
  menu.appendChild(listItem);

  var anchor = document.createElement("a");
  anchor.href = prefix + href;
  anchor.appendChild(document.createTextNode(text));
  listItem.appendChild(anchor);

  return listItem;

}

$(document).foundation();
