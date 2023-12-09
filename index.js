let stars = document.getElementById('stars')
let lua = document.getElementById('lua')
let montanha_fundo = document.getElementById('montanha_fundo')
let text = document.getElementById('text')
let btn = document.getElementById('butao')
let montanha_frente = document.getElementById('montanha_frente')
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';4
    lua.style.top = value * 1.05 + 'px';
    montanha_fundo.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})