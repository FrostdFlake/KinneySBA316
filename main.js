const bawdyDoc = document.querySelector("body");
const mainDoc = document.getElementById("main");
const firstTitle = document.createElement("h1");
firstTitle.textContent = "Performing Art";
firstTitle.style.textAlign = "center";
const daDiv = document.createElement("div");
const sectEight = document.createElement("section");
mainDoc.prepend(firstTitle, daDiv, sectEight);
const crowdSurf = document.querySelector("iframe");
const msMonet = document.querySelectorAll("img")
daDiv.append(msMonet[0], crowdSurf, msMonet[1]);
const textNdWerds = document.querySelectorAll("ul");
sectEight.append(...textNdWerds);
sectEight.style.display = "flex";
sectEight.style.flexWrap = "wrap";
const secondTitles = document.querySelectorAll("h2");
const titleElements = [firstTitle, ...secondTitles];

titleElements.forEach(function(titleElement) {
  titleElement.addEventListener("click", function() {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
});

msMonet[0].addEventListener("click", function() {
      const youtubeURL = "https://youtu.be/KdJ-Qwu3y4Y?si=w7wyVVZ5ryk8ENoe";
      window.open(youtubeURL, "_blank");
    });

msMonet[1].addEventListener("click", function() {
      const utubeURL = "https://youtu.be/1RFLY62LrH0?si=ji6n1f6aVjl-oSI9";
      window.open(utubeURL, "_blank");
    });

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const enjoy = document.getElementById("enjoy").value;
  const comment = document.getElementById("comment").value;
  const confirmationMessage = `You are about to submit the following information:\n\nEmail: ${email}\nEnjoyed the site: ${enjoy}\nComment: ${comment}`;
  alert(confirmationMessage);
});
