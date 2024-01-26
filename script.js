const panier = {
    pommes : 2,
    poires : 5,
    prunes : 7
}
// Pour afficher le nombre de pommes dans la facture détaillée
let qtePommes = panier.pommes.toString();
let qtePoire = panier.poires.toString();
let qtePrunes = panier.prunes.valueOf();

// donne la bulle alerte
alert("Connard");
// Écrire ddans un document: 1. donner le ID (document.getElementByID) ou (getwhateverthefuck) et enregistrer variable
// 2. La variable en question disons let ou const <<x.textContent>> *** voir textContent vs innerText ***
const wazza = document.getElementById("Wazza");
wazza.textContent = "WAAAAAAAAZZZZZZZZAAAAAAAAAAAAAAA!";
// mettre la qté de pomme dans le tableau correspondant
const textNbPomme = document.getElementById("qtePommes");
const poidsNbPommes = document.getElementById("poidsPommes");
const textPrixPommes = document.getElementById("prixPommes");
textNbPomme.textContent = qtePommes;
let nbPommes = parseInt(qtePommes);
poidsNbPommes.textContent = nbPommes * 10 + "";
textPrixPommes.textContent= nbPommes * 13.75 + "";

const textNbPoire = document.getElementById("qtePoires");
const poidsNbPoire = document.getElementById("poidsPoires");
const textPrixPoire = document.getElementById("prixPoires");
textNbPoire.textContent = qtePoire;
let nbPoire = parseInt(qtePoire);
poidsNbPoire.textContent = nbPoire * 20 + "";
textPrixPoire.textContent= nbPoire * 12 + "";

const  textNbPrunes = document.getElementById("qtePrunes");
textNbPrunes.textContent = qtePrunes + "";
const textPrixPRunes = document.getElementById("prixPrunes");
textPrixPRunes.textContent = qtePrunes * 22 + "";
const textPoidsPrunes = document.getElementById("poidsPrunes")
textPoidsPrunes.textContent = qtePrunes * 15 + "";




