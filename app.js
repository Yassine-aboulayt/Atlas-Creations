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