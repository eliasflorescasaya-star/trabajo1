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
        card.style.display = nombre.includes(texto) ? "block" : "none";
    });
});

cards.forEach(card => {
    card.addEventListener("click", function(){

        sonido.currentTime = 0;
        sonido.play().catch(error => console.log("Error audio:", error));

        let nombre = card.dataset.name;

        let datos = {

hiro:"Protagonista de la historia y piloto de Strelizia junto a Zero Two.",

zerotwo:"Piloto híbrida con sangre de Klaxosaurio, conocida por sus cuernos rojos y su personalidad fuerte.",

ichigo:"Líder del Escuadrón 13 y amiga de la infancia de Hiro.",

goro:"Mejor amigo de Hiro, tranquilo, leal y protector con sus compañeros.",

zorome:"Piloto impulsivo y orgulloso, compañero de Miku.",

miku:"Piloto enérgica, directa y compañera de Zorome.",

kokoro:"Piloto amable y sensible que empieza a cuestionar el mundo donde vive.",

mitsuru:"Piloto serio y reservado que carga con heridas emocionales del pasado.",

ikuno:"Piloto inteligente y tranquila, compañera de Mitsuru.",

futoshi:"Piloto amable y optimista, muy unido a Kokoro al inicio de la historia.",

nana:"Supervisora del Escuadrón 13, encargada de cuidar y guiar a los pilotos.",

hachi:"Supervisor serio y responsable que trabaja junto a Nana.",

drfranxx:"Científico creador de los Franxx y personaje clave en el origen de la historia.",

papa:"Líder de APE, una figura autoritaria que controla gran parte de la humanidad.",

code001:"Princesa de los Klaxosaurios, una de las figuras más poderosas de la historia.",

naomi:"Antigua compañera de Hiro al inicio de la historia.",

alpha:"Miembro de los Nines, un grupo especial de pilotos al servicio de APE.",

beta:"Miembro de los Nines, conocido por su obediencia hacia APE.",

gamma:"Miembro de los Nines y parte del grupo especial de pilotos.",

delta:"Integrante de los Nines, piloto de élite creado para servir a APE.",

epsilon:"Integrante de los Nines, parte del grupo especial relacionado con Zero Two."

};

        titulo.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);

        descripcion.textContent = datos[nombre] || "Personaje de Darling in the Franxx.";

        popup.style.display = "flex";
    });
});

window.cerrarPopup = function(){
    popup.style.display = "none";
}

});