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