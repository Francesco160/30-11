function cambiaTitolo() {
    let h1 = document.getElementById("titolo")
    h1.textContent = "Nuovo Titolo!";
}
function cambiaColore(){
 document.body.style.backgroundColor = "#FF5733"
}
function cambiaIndirizzo(){
    let indirizzo = document.getElementById("indirizzo")
    indirizzo.textContent = "nuovo indirizzo"
}
function aggiungiClasse() {
    let linksAmazon = document.querySelectorAll('a[href*="google.com"]');
    linksAmazon.forEach(link => {
        link.classList.add("google-link");
    });
}
function invisibilità (){
    let immagini = document.querySelectorAll(`.telefono img`)
    immagini.forEach(immagine =>{
        if (immagine.classList.contains(`invisibile`)){
            immagine.classList.remove(`invisibile`)
        } else {
            immagine.classList.add(`invisibile`)
        }
    }

    )
}
function cambiaPrezzo() {
    const colori = [`red`, `blue`, `green`]
    const prezzo = document.querySelectorAll(`.telefono`)
    prezzo.forEach((prezzi, index) =>{
        prezzi.style.color = colori[index % colori.length];
    })
}