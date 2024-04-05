/** @format */

let calcul = document.getElementById("calcul");
calcul.addEventListener("click", () => {
  let dateUser = document.getElementById("date").value;
  let moisUser = document.getElementById("mois").value;
  let anneeUser = document.getElementById("annee").value;
  if (dateUser.value !== "" && moisUser !== "" && anneeUser !== "") {
    /****************date javascript---------- */
    let datejs = new Date();
    let date1 = datejs.getDate();
    let mois1 = 1 + datejs.getMonth();
    let annee1 = datejs.getFullYear();

    let month = [30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dateUser > date1) {
      date1 = date1 + month[mois1 - 1];
    }

    if (moisUser > mois1) {
      mois1 = mois1 + 12;
      annee1 = annee1 - 1;
    }
    /********************affichage ***************** */
    let d = date1 - dateUser;
    let m = mois1 - moisUser;
    let y = annee1 - anneeUser;

    let affichage = (document.getElementById("affichage").innerHTML =
      "Vous avez : " + y + "ans" + " " + m + "mois et " + d + "jours");
  }
});
