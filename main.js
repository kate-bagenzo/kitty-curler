import './style.css'
var slider = document.getElementById('slider');
var gato = document.getElementById('gato');

slider.addEventListener('input', () => {
  gato.src = "img/gato" + slider.value + ".jpg";
})