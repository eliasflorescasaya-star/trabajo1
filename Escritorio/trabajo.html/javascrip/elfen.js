document.addEventListener("DOMContentLoaded", function(){

let cards = document.querySelectorAll(".card");
let buscador = document.getElementById("buscador");
let popup = document.getElementById("popup");
let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("descripcion");
let sonido = document.getElementById("clickSound");


buscador.addEventListener("keyup", function(){

let texto = buscador.value.toLowerCase();

cards.forEach(card => {

let nombre = card.dataset.name;

card.style.display = nombre.includes(texto)
? "block"
: "none";

});

});


cards.forEach(card => {

card.addEventListener("click", function(){

sonido.currentTime=0;

sonido.play().catch(error=>console.log(error));

let nombre=card.dataset.name;

let datos={

lucy:"Lucy es una Diclonius extremadamente poderosa con vectores invisibles capaces de destruir todo a su paso.",

nyu:"Nyu es la personalidad inocente y amable de Lucy tras perder parte de sus recuerdos.",

kouta:"Kouta es un joven amable que ayuda a Lucy y posee una conexión importante con su pasado.",

yuka:"Yuka es amiga de la infancia de Kouta y se preocupa profundamente por él.",

nana:"Nana es una Diclonius experimental con una personalidad amable y cariñosa.",

kurama:"Kurama es el director del laboratorio encargado de los experimentos Diclonius.",

mariko:"Mariko es una poderosa Diclonius con un pasado triste y doloroso.",

bandou:"Bandou es un exsoldado agresivo que persigue a Lucy.",

mayu:"Mayu es una niña abandonada que encuentra una nueva familia.",

nozomi:"Nozomi es una joven tímida apasionada por la música."

};

titulo.textContent=
nombre.charAt(0).toUpperCase()
+nombre.slice(1);

descripcion.textContent=
datos[nombre]
|| "Personaje increíble";

popup.style.display="flex";

});

});


window.cerrarPopup=function(){

popup.style.display="none";

}

});