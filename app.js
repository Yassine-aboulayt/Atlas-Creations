const titre = document.querySelector("h1");
titre.classList.add("highlight");

const lienSrv = document.querySelectorAll('a[href="#services"]');
const sectionSrv = document.querySelector("#services");

lienSrv.forEach(function (lien) {
    lien.addEventListener("click", function (event){
        event.preventDefault();

    if (sectionSrv.hidden){
        sectionSrv.hidden = false;
    }else {
        sectionSrv.hidden = true;
     }
    });
});


const temoignages = document.querySelectorAll(".card-testimonials");

temoignages.forEach(function (temoignages, index){
    setTimeout(function(){
        temoignages.classList.add("fade-in");

    }, (index + 1) * 500);
});


const conteneur = document.querySelector(".testimonials");

conteneur.addEventListener("click", function(event){
    if (event.target.closest("button")){
        return;
    }
    const temoignages = event.target.closest(".card-testimonials");

    if(temoignages){
        const auteur = temoignages.querySelector("cite");
        alert(auteur.textContent);
    }
}, true);


const footer = document.querySelector("footer");

footer.addEventListener("click", function (){

    navigator.clipboard.writeText(footer.textContent.trim())
});


const menus = document.querySelectorAll("#menu");
const cartes = document.querySelectorAll(".card");
const checkboxes = document.querySelectorAll('#filters input[type="checkbox"]');

console.log("menus :", menus.length);
console.log("cartes :", cartes.length);
console.log("checkboxes :", checkboxes.length)