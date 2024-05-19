// Seleccionar los elementos del DOM

const button = document.querySelector("button")
const color = document.getElementById("color")

function generateRandomColor() {
  let digitos = "0123456789ABCDEF";
  let colorHex = '#'

  for (let i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random()*16);
    colorHex += digitos[randomIndex]
  }

  return colorHex
}

button.addEventListener('click', function(){
  let colorRandom = generateRandomColor();
  // Actualizar el texto de la etiqueta color
  color.textContent = colorRandom;
  // Actualizar el color de fondo del body 
  document.body.style.backgroundColor = colorRandom
})