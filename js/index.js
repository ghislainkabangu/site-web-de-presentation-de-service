/** @format */

/************************************************ */
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".closeMenu");
let openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", () => {
  menu.classList.add("menuInjs");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("menuInjs");
});
/*******************************LES LIENS DE NAVIGATION********************************* */

let link = document.querySelectorAll(".link");
for (let x = 0; x < link.length; x++) {
  link[x].addEventListener("click", () => {
    menu.classList.remove("menuInjs");
  });
}
/************************************************************* */
let bloc_service = document.querySelectorAll(".bloc_service");
for (let j = 0; j < bloc_service.length; j++) {
  bloc_service[j].addEventListener("mouseover", () => {
    bloc_service[j].classList.add("bloc_service_Js");
    bloc_service[j].setAttribute(
      "title",
      "Nous sommes capable de vous le concevoir"
    );
  });

  bloc_service[j].addEventListener("mouseout", () => {
    bloc_service[j].classList.remove("bloc_service_Js");
  });
}
/********************************************** */
let membreEquipe = document.querySelectorAll(".bloc_membre_equipe");
for (let i = 0; i < membreEquipe.length; i++) {
  membreEquipe[i].addEventListener("mouseover", () => {
    membreEquipe[i].classList.add("bloc_membre_equipe_js");
  });

  membreEquipe[i].addEventListener("mouseout", () => {
    membreEquipe[i].classList.remove("bloc_membre_equipe_js");
  });
}
/********************************************* */
let contact = document.querySelectorAll(".contact");
for (let y = 0; y < contact.length; y++) {
  contact[y].addEventListener("mouseover", () => {
    contact[y].innerHTML = "consulter";
  });

  contact[y].addEventListener("mouseout", () => {
    contact[y].innerHTML = "contacter";
  });
  contact[y].title = "Cliquez ici pour le consulter";
}
/*********************************************** */
