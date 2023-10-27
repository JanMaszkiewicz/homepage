console.log("Helo world!");

let themeName = document.querySelector(".theme__name");
let button = document.querySelector(".button");
let bodyElement = document.querySelector(".body");
let header = document.querySelector(".header");
let navLink = document.querySelectorAll(".navigation__link");
let sectionLinks = document.querySelectorAll(".section__links");
let sectionLink = document.querySelectorAll(".section__link");
let tableCaption = document.querySelector(".table__caption");


button.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  header.classList.toggle("dark");
  button.classList.toggle("dark");
  navLink.forEach((navLink) => navLink.classList.toggle("dark"));
  tableCaption.classList.toggle("dark");
  sectionLinks.forEach((sectionLinks) =>
    sectionLinks.classList.toggle("link--dark")
  );
  sectionLink.forEach((sectionLink) => sectionLink.classList.toggle("dark"));
  themeName.innerText = bodyElement.classList.contains("dark")
    ? "Jasny"
    : "Ciemny";
});

let count = document.querySelector(".countdown");
let howMuch = document.querySelector(".howMuch");
let day = document.querySelector(".day").innerText;

switch (day) {
  case "poniedziałek":
    howMuch.innerText = "6";
    break;
  case "wtorek":
    howMuch.innerText = "5";
    break;
  case "środa":
    howMuch.innerText = "4";
    break;
  case "czwartek":
    howMuch.innerText = "3";
    break;
  case "piątek":
    howMuch.innerText = "2";
    break;
  case "sobota":
    howMuch.innerText = "1";
    break;
}


howMuch.innerText = (day === "poniedziałek")
  ? "6"
  : ((day === "wtorek")
    ? "5"
    : ((day === "środa")
      ? "4"
      : ((day === "czwartek")
        ? "3"
        : ((day === "piątek")
          ? "2"
          : "1"
        ))));

