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
/*******************************les liens de navigation******************************** */

let link = document.querySelectorAll(".link");
for (let x = 0; x < link.length; x++) {
  link[x].addEventListener("click", () => {
    menu.classList.remove("menuInjs");
  });
}
/**********************gestion des interactions images********************** */
/*
let image = document.getElementById("image");
image.addEventListener("mouseover", () => {
  image.src = "album/fond2.png";
});
image.addEventListener("mouseout", () => {
  image.src = "album/logo.png";
});
/************************************** ************/
let service_organisee = document.querySelectorAll(".service_organisee");
for (let i = 0; i < service_organisee.length; i++) {
  service_organisee[i].addEventListener("mouseover", () => {
    service_organisee[i].classList.add("newClass");
    service_organisee[i].title = "Service";
  });

  service_organisee[i].addEventListener("mouseout", () => {
    service_organisee[i].classList.remove("newClass");
  });
}
