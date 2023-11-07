const welcome = () => {
  console.log("Helo world!");
}
welcome();

const switchToDark = () => {
  const themeName = document.querySelector(".theme__name");
  const button = document.querySelector(".button");
  const bodyElement = document.querySelector(".body");
  const header = document.querySelector(".header");
  const navLink = document.querySelectorAll(".navigation__link");
  const sectionLinks = document.querySelectorAll(".section__links");
  const sectionLink = document.querySelectorAll(".section__link");
  const tableCaption = document.querySelector(".table__caption");


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
}
switchToDark();

{
  const jsday = document.querySelector(".js-day")
  
  jsday.addEventListener("input", () => {

    const day = document.querySelector(".day").value;
    const howMuch = document.querySelector(".howMuch");

    howMuch.innerText = (day === "poniedziałek")
      ? "4"
      : ((day === "wtorek")
        ? "3"
        : ((day === "środa")
          ? "2"
          : ((day === "czwartek")
            ? "1"
            : ((day === "piątek")
              ? "7"
              : ((day === "sobota")
                ? "6"
                : "5"
              ))))
      )
  });


}
