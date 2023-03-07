'use strict'
//LIGHTBOX
const enlaces = document.querySelectorAll('.ul-li .a-li')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace, i)=>{
        enlaces[i].addEventListener('click', (e)=>{
                e.preventDefault()
                let ruta = cadaEnlace.querySelector('.img').src
                console.log(ruta)

                lightbox.classList.add('activo')
                grande.setAttribute('src', ruta)

        })
})

cerrar.addEventListener('click', ()=>{
       lightbox.classList.remove('activo')

})

//CARRUSEL
const big = document.querySelector('.big');
const punto = document.querySelectorAll('.punto');

punto.forEach( ( cadaPunto , i )=> {
        punto[i].addEventListener('click',()=>{

                let posicion = i
                let operacion = posicion * -10

                big.style.transform = `translateX(${ operacion }%)`

                punto.forEach( ( cadaPunto , i )=>{
                        punto[i].classList.remove('activo')
                })
                punto[i].classList.add('activo')
        })
})