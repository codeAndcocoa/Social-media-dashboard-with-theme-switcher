"use strict";
const switchInout = document.getElementById("modeSwitch");
const webBody = document.getElementsByTagName("body")[0];
const pattern = document.querySelector(".mode-toggle");
const title = document.querySelector(".title h1");
const subtitle = document.querySelector(".title h6");
const darkWord = document.querySelector(".form-check-label");
const cardCells = document.querySelectorAll(".total");
const overviewTitle = document.querySelector("#today-overview h2");
const overviewCells = document.querySelectorAll(".overview-cell");

// Dark Theme Object
const darkTheme = {
  bodyBg: "hsl(230, 17%, 14%)",
  patternBg: "hsl(232, 19%, 15%)",
  cardBg: "hsl(228, 28%, 20%)",
  textColor1: "hsl(0, 0%, 100%)",
  textColor2: "hsl(228, 34%, 66%)",
};

//Changing Elements function

const darkStyle = () => {
  webBody.style.backgroundColor = darkTheme.bodyBg;
  pattern.style.backgroundColor = darkTheme.patternBg;
  title.style.color = darkTheme.textColor1;
  subtitle.style.color = darkTheme.textColor2;
  darkWord.style.color = darkTheme.textColor2;
  cardCells.forEach((card) => {
    card.style.backgroundColor = darkTheme.cardBg;
    card.querySelector(".username").style.color = darkTheme.textColor2;
    card.querySelector("h2").style.color = darkTheme.textColor1;
    card.querySelector("span").style.color = darkTheme.textColor2;
    card.onmouseover = () => {
      card.style.backgroundColor = "hsl(228, 34%, 66%,0.3)";
    };
    card.onmouseout = () => {
      card.style.backgroundColor = darkTheme.cardBg;
    };
  });

  overviewCells.forEach((overview) => {
    overview.style.backgroundColor = darkTheme.cardBg;
    overview.querySelectorAll(".col-6")[0].style.color = darkTheme.textColor2;
    overview.querySelectorAll(".col-6")[2].style.color = darkTheme.textColor1;
    overview.onmouseover = () => {
      overview.style.backgroundColor = "hsl(228, 34%, 66%,0.3)";
    };
    overview.onmouseout = () => {
      overview.style.backgroundColor = darkTheme.cardBg;
    };
  });
};
const lightStyle = () => {
  webBody.style.backgroundColor = null;
  pattern.style.backgroundColor = null;
  title.style.color = null;
  subtitle.style.color = null;
  darkWord.style.color = null;
  cardCells.forEach((card) => {
    card.style.backgroundColor = null;
    card.querySelector(".username").style.color = null;
    card.querySelector("h2").style.color = null;
    card.querySelector("span").style.color = null;
    card.onmouseover = () => {
      card.style.backgroundColor = null;
    };
    card.onmouseout = () => {
      card.style.backgroundColor = null;
    };
  });
  overviewCells.forEach((overview) => {
    overview.style.backgroundColor =null;
    overview.querySelectorAll(".col-6")[0].style.color = null;
    overview.querySelectorAll(".col-6")[2].style.color = null;
    overview.onmouseover = () => {
      overview.style.backgroundColor = null;
    };
    overview.onmouseout = () => {
      overview.style.backgroundColor = null;
    };
  });
};

//Event handlers
switchInout.addEventListener("change", (e) => {
  e.target.checked ? darkStyle() : lightStyle();
});
