
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

        // 🔥 SONIDO
        sonido.currentTime = 0;
        sonido.play().catch(error => console.log("Error audio:", error));

        let nombre = card.dataset.name;

        let datos = {

subaru:"Joven transportado a otro mundo con la habilidad de regresar tras morir.",

emilia:"Medio elfa amable y candidata a convertirse en reina de Lugunica.",

rem:"Sirvienta demonio extremadamente leal a Subaru y gran combatiente.",

ram:"Hermana mayor de Rem, conocida por su personalidad fría y gran talento mágico.",

puck:"Espíritu protector de Emilia con un enorme poder oculto.",

beatrice:"Espíritu guardián de la biblioteca prohibida con una personalidad tsundere.",

roswaal:"Misterioso mago y noble que apoya la candidatura de Emilia al trono.",

frederica:"Sirvienta de la mansión Roswaal con habilidades de bestia humana.",

otto:"Mercader y fiel amigo de Subaru que puede hablar con los animales.",

garfiel:"Guardián del Santuario con una personalidad salvaje pero noble.",

reinhard:"Caballero Santo considerado el más fuerte del reino de Lugunica.",

julius:"Caballero refinado y experto espadachín al servicio de Anastasia.",

anastasia:"Astuta comerciante y candidata al trono con gran inteligencia.",

aldebaran:"Guardaespaldas misterioso con un pasado desconocido.",

wilhelm:"Legendario espadachín conocido como el Dios de la Espada.",

echidna:"Bruja de la Avaricia interesada profundamente en Subaru.",

satella:"Bruja de la Envidia que otorgó a Subaru el Retorno por la Muerte."

};

       titulo.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        descripcion.textContent = datos[nombre] || "Personaje increíble";

        popup.style.display = "flex";
    });
});

/* ❌ CERRAR POPUP */
window.cerrarPopup = function(){
    popup.style.display = "none";
}

});