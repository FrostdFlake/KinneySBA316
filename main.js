const bawdyDoc = document.querySelector("body");
const mainDoc = document.getElementById("main");
const firstTitle = document.createElement("h1");
firstTitle.textContent = "Project Title Goes Here";
firstTitle.style.textAlign = "center";
const daDiv = document.createElement("div");
const sectEight = document.createElement("section");
mainDoc.prepend(firstTitle, daDiv, sectEight);
const crowdSurf = document.querySelector("iframe");
const msMonet = document.querySelectorAll("img")
daDiv.append(crowdSurf, ...msMonet);
const textNdWerds = document.querySelectorAll("ul");
sectEight.append(...textNdWerds);
sectEight.style.display = "flex";
sectEight.style.flexWrap = "wrap";

mainDoc.addEventListener("click", myFunction);
function myFunction() {
  let element = document.body;
  element.classList.toggle("light-mode");
}