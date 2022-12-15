function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = (Math.random() * (window.innerHeight - elm.offsetHeigth)) + 'px';
    elm.style.left = (Math.random() * (window.innerWidth - elm.offsetWidth)) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");

let divModo = document.getElementsByClassName("titulo")[0]

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e) {
    alert('Sabia que dirias que SI. Casemonos ya y tengamos hijos. TE AMO!!!');

    divModo.style.display = 'block';
    const cancion = new Audio('imagenes\\romanticon.mp3');
    cancion.play();
    
})