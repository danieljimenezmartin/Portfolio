'use strict'
//CURSOR RATÓN PERSONALIZADO
$(document).ready(function(){
        
        $('body').on({ 'mousemove' : function( e ){
                console.clear()
                let clientX = e.originalEvent.clientX
                let clientY = e.originalEvent.clientY
                $('#cursor').css({
                        'left' : (clientX - 24 ) + 'px',
                        'top' : (clientY - 24 ) + 'px'
                })
        }})

        $('.a').on({
                'mouseover': function(){
                        $('#cursor').addClass('mini')
                },
                'mouseout': function(){
                        $('#cursor').removeClass('mini')
                },
        })
})

//MOSTRAR FOTO
$(document).ready(function(){
        
        $('.nombre').on({ 'mousemove' : function( e ){
                console.clear()
                let clientX = e.originalEvent.clientX
                let clientY = e.originalEvent.clientY
                $('#foto').css({
                        'left' : (clientX) + 'px',
                        'top' : (clientY) + 'px'
                })
        }})

        $('.nombre').on({
                'mouseover': function(){
                        $('#foto').addClass('mostrar')
                },
                'mouseout': function(){
                        $('#foto').removeClass('mostrar')
                },
        })
})


//MOSTRAR/OCULTAR MENU DISPOSITIVOS MÓVILES
const logoMenu = document.getElementById('logomenu')
const Menu = document.getElementById('menu')

logoMenu.addEventListener('click' , (e) => {
    if (e.target.id == 'logomenu' || e.target.parentElement.id == 'logomenu'){
        Menu.classList.toggle('show')
        logoMenu.classList.toggle('show')
    }
})


//FRASE ALEATORIA
var Frase=new Array() 
Frase[0] = "La gente ignora el diseño que ignora a la gente.";
Frase[1] = "La tecnología hace posible lo que antes era imposible. El diseño hace que sea real."; 
Frase[2] = "El lenguaje es una limitación, una prisión. El diseño permite explorar otros espacios."; 
Frase[3] = "Si puedes diseñar una cosa, entonces puedes diseñarlo todo; si lo haces bien, perdurará para siempre."; 
Frase[4] = "He visto películas que me han conmovido, he leído libros que han cambiado mi modo de ver las cosas y he escuchado música que ha influido en mi ánimo. Nuestro objetivo será llegar al corazón de la gente con el diseño."; 
Frase[5] = "Haz lo que mejor sabes hacer, pero sé capaz de cambiar con el tiempo."; 
Frase[6] = "Que tus diseños tengan un fuerte significado."; 
Frase[7] = "Cada gran diseño comienza con una historia aún mejor."; 
Frase[8] = "Diseñar es pensar en hacerlo visual."; 
Frase[9] = "El contenido precede al diseño. Diseño en ausencia de contenido no es diseño, es decoración."; 
Frase[10] = "El diseño debe servir para comunicar de la manera más clara y sencilla posible."; 
Frase[11] = "El diseño está en todo lo que hacemos, pero también está en medio de todo. Es una combinación de arte, historia y filosofía."; 
Frase[12] = "La idea no es vivir para siempre: la idea es crear algo que sí lo haga."; 
Frase[13] = "Deshazte de todo lo que no es esencial para mostrar algo."; 
Frase[14] = "Observa las cosas usuales con ojos inusuales."; 
Frase[15] = "Todo está diseñado. Pocas cosas están bien diseñadas."; 
Frase[16] = "La simplicidad es sustraer lo obvio y añadir lo significativo."; 
Frase[17] = "El diseño es una oportunidad de seguir contando una historia, no de resumirla."; 
Frase[18] = "El diseño puede ser arte. El diseño puede ser estética. El diseño es tan simple, por eso es tan complicado."; 
Frase[19] = "El buen diseño es honesto."; 
Frase[20] = "Los detalles no son detalles. Los detalles hacen el diseño."; 
Frase[21] = "El diseño es el intermediario entre la información y la comprensión."; 
Frase[22] = "Para mí, no hay reglas cuando se trata de lo que se considera un “buen” diseño."; 
Frase[23] = "La simplicidad es la máxima sofisticación."; 
Frase[24] = "Hay tres respuestas a una pieza de diseño: sí, no y ¡guau! Guau es el objetivo al que hay que apuntar."; 
Frase[25] = "El diseño gráfico salvará el mundo justo después de que lo haga el rock and roll."; 
Frase[26] = "La creatividad no es más que una mente liberada."; 

var Autor=new Array() 
Autor[0] = "- Frank Chimero";
Autor[1] = "- Michael Gagliano";
Autor[2] = "- Neville Brody";
Autor[3] = "- Massimo Vignelli";
Autor[4] = "- Stefan Sagmeister";
Autor[5] = "- Paula Scher";
Autor[6] = "- Jacqueline Casey";
Autor[7] = "- Lorinda Mamo";
Autor[8] = "- Saul Bass";
Autor[9] = "- Jeffrey Zeldman";
Autor[10] = "— Astrid Stavro";
Autor[11] = "— Erik Adigard";
Autor[12] = "— Andy Warhol ";
Autor[13] = "— Cristoph Niemann";
Autor[14] = "— Vigo Magistretti";
Autor[15] = "— Brian Reed";
Autor[16] = "— John Maeda";
Autor[17] = "— Tate Linden";
Autor[18] = "— Paul Rand";
Autor[19] = "— Dieter Rams";
Autor[20] = "— Charles Eames";
Autor[21] = "— Hans Hoffman";
Autor[22] = "— Kate Moross";
Autor[23] = "— Leonardo da Vinci";
Autor[24] = "—Milton Glaser";
Autor[25] = "— David Carson";
Autor[26] = "—Torrie T. Asai";

var F = Frase.length;
var aleatorio=Math.round(Math.random()*(F-1));
function fraseAleatoria(){
        document.getElementById("frase").innerHTML = (Frase[aleatorio]);
        document.getElementById("autor").innerHTML = (Autor[aleatorio]);
}
fraseAleatoria();
