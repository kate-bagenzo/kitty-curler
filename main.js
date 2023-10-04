import './style.css'
var slider = document.getElementById('slider');
var gato = document.getElementById('gato');

function preload(url) {
  let img = new Image();
  img.src = url;
}

for (let i = 0; i <= 60; i++) {
  preload("img/gato" + i + ".jpg");
}

slider.addEventListener('input', () => {
  gato.src = "img/gato" + slider.value + ".jpg";
})