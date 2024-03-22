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
/******************************************** */
let body=document.getElementsByTagName("body")[0]
body.addEventListener("sroll",()=>{
  alert("édsuifhmnkfg")
})
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
