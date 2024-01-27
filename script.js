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
textPrixPommes.textContent= nbPommes * 13.50 + "";

const textNbPoire = document.getElementById("qtePoires");
const poidsNbPoire = document.getElementById("poidsPoires");
const textPrixPoire = document.getElementById("prixPoires");
textNbPoire.textContent = qtePoire;
let nbPoire = parseInt(qtePoire);
poidsNbPoire.textContent = nbPoire * 12 + "";
textPrixPoire.textContent= nbPoire * 20 + "";

const  textNbPrunes = document.getElementById("qtePrunes");
textNbPrunes.textContent = qtePrunes + "";
const textPrixPRunes = document.getElementById("prixPrunes");
textPrixPRunes.textContent = qtePrunes * 22 + "";
const textPoidsPrunes = document.getElementById("poidsPrunes");
textPoidsPrunes.textContent = qtePrunes * 15 + "";

// Faire le total dans le tableau nbSacTotal, poidsTotal et prixTotal
const  textNbSacTotal = document.getElementById("qteTotal");
let nbTotalSac = nbPoire + nbPommes + qtePrunes;
textNbSacTotal.textContent = nbTotalSac + "";

const textPoidsTotal = document.getElementById("poidsTotal");
textPoidsTotal.textContent = nbPoire * 12 + nbPommes * 10 + qtePrunes * 15 + "";

const  textPrixTotal = document.getElementById("prixTotal");
let prixTotal = qtePrunes * 22 + nbPommes * 13.5 + nbPoire * 20;
textPrixTotal.textContent = prixTotal + "";

// Faire fonctionner les boutons dans le but d'ajouter un sac!
const eventDesBoutons = document.querySelectorAll("button");

eventDesBoutons.item(0).addEventListener("click",()=>
{
    nbPommes++;
    textNbPomme.textContent=nbPommes + "";
    poidsNbPommes.textContent = nbPommes * 10 + "";
    textPrixPommes.textContent= nbPommes * 13.50 + "";

});
eventDesBoutons.item(1).addEventListener("click",()=>
{
    nbPoire++;
    textNbPoire.textContent= nbPoire + "";
    poidsNbPoire.textContent = nbPoire * 12 + "";
    textPrixPoire.textContent= nbPoire * 20 + "";

});

eventDesBoutons.item(2).addEventListener("click",()=>
{
    qtePrunes++;
    textNbPrunes.textContent = qtePrunes + "";
    textPrixPRunes.textContent = qtePrunes * 22 + "";
    textPoidsPrunes.textContent = qtePrunes * 15 + "";
})

for (let i = 0; i < 3; i++) {

    eventDesBoutons.item(i).addEventListener("click",() =>
    {
        textNbSacTotal.textContent = nbPoire + nbPommes + qtePrunes + "";
        textPrixTotal.textContent = nbPoire * 20 + nbPommes * 13.5 + qtePrunes * 22 + "";
        textPoidsTotal.textContent = nbPoire * 12 + nbPommes * 10 + qtePrunes * 15 + "";

    })

}