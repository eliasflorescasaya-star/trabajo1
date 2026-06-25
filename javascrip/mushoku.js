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

rudeus:"Protagonista reencarnado que decide vivir su nueva vida esforzándose al máximo.",

roxy:"Maestra de magia de Rudeus y una poderosa maga de la raza Migurd.",

eris:"Joven noble de carácter fuerte que acompaña a Rudeus en varias aventuras.",

sylphiette:"Amiga de la infancia de Rudeus, amable y talentosa con la magia.",

ruijerd:"Guerrero de la raza Supard que protege a Rudeus y Eris durante su viaje.",

paul:"Padre de Rudeus, espadachín talentoso y miembro de la familia Greyrat.",

zenith:"Madre de Rudeus, una mujer amable con habilidades de sanación.",

lilia:"Sirvienta de la familia Greyrat y madre de Aisha.",

aisha:"Hermana menor de Rudeus, inteligente y muy capaz desde pequeña.",

norn:"Hermana menor de Rudeus, más tímida y sensible que Aisha.",

ghislaine:"Espadachina bestia muy poderosa y maestra de Eris.",

orsted:"Dios Dragón, uno de los seres más poderosos y temidos del mundo.",

hitogami:"Dios Humano, una entidad misteriosa que se comunica con Rudeus.",

zanoba:"Príncipe de Shirone con una gran obsesión por las figuras y muñecas.",

nanahoshi:"Joven proveniente de Japón que busca una forma de regresar a su mundo."

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