//* Seleccionar elementos por su id. el id es único, por lo que será un único elemento.
  // const contenedor = document.getElementById("contenedor");
  // console.log(typeof contenedor.innerHTML); // la propiedad innerHTML me da acceso a la estructura HTML que está contenida dentro de ese elemento

  // const titulo = document.getElementById("titulo")
  // console.log(titulo);
  // console.log(typeof titulo); //--> Tipo de dato objeto de javascript.

  // console.log(titulo.innerText); // innerText retorna el texto contenido dentro del elemento, el tipo de dato sería string. 

  // console.log(titulo.tagName); // retornara H1, por si necesito en algún momento implementar lógica conociendo la etiqueta. 

  // //* Seleccionar varios elementos por su clase

  // const toppings = document.getElementsByClassName("topping");
  // console.log(toppings); //El resultado es un HTML Collection que es parecida a un arreglo
  // console.log(toppings.length); //# de elementos con esa clase

  // //Si solo quiero acceder por ejemplo a aceituras lo llamaría como un arreglo 
  // console.log(toppings[0]); //obtener elemento 1 de la lista de objetos toppings
  // console.log(toppings[2].id); 

  // //* Seleccionar varios elementos por su etiqueta en HTML

  // const misToppings = document.getElementsByTagName("li");
  // console.log(misToppings);

  // const toppingsFondoMarron = document.getElementsByClassName("fondo-marron");
  // console.log(toppingsFondoMarron);

  // //* Seleccionar un elemento que cumpla el criterio de un selector CSS 
  // // querySelector()--> Permite seleccionar el primer elemento que cumpla el criterio 
  // // querySelectorAll() --> Permite seleccionar todos los elementos que cumplan el criterio. 

  // //* querySelector()

  // const aceitunas = document.querySelector("#aceitunas") //se puede colocar un #id específico 
  // console.log(aceitunas);

  // const aceitunasTopping = document.querySelector(".topping") //se puede colocar una clase específica y me seleccionará el primer elemento con esa clase
  // console.log(aceitunasTopping);

  // const primerToppingNaranja = document.querySelector(".topping.fondo-naranja") //puedo colocar 2 clases 
  // console.log(primerToppingNaranja);

  // const ulToppingNaranja = document.querySelector("ul li.fondo-naranja") //puedo colocar 1 etiqueta, seguido de otra etiqueta con una clase.  
  // console.log(ulToppingNaranja);

  // const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron)") //puedo negar la existencia de una clase. 
  // console.log(primerToppingNoMarron);

  // //* querySelectorAll()

  // const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja")
  // console.log(toppingsNaranja); //me arroja una lista de nodos con índices como un arreglo. // también va a tener un lenght 
  // console.log(toppingsNaranja[0]); 


  // //* Cambiarle el estilo a un elemento en JAvascript
  // const primerTopping = document.querySelector(".topping");
  // //Ver qué propiedades puedo modificar de estilo 
  // console.log(primerTopping.style);

  // // asignar estilos directamente desde el JS sobre-escribiendo lo que hay en el css. 
  // // primerTopping.style.backgroundColor = "blue";
  // // primerTopping.style.color = "#6dff00";
  // // primerTopping.style.textTransform = "uppercase"

  // //* Obtener contenido interno de un elemento con texto

  // const listaToppings = document.getElementById("lista-topings")
  // console.log("> innerText");
  // console.log(listaToppings.innerText); //me muestra el texto contenido de el ul. 

  // console.log("> textContent");
  // console.log(listaToppings.textContent); //Me muestra la identación que el elemento tiene en el HTML

  // console.log("> innerHTML");
  // console.log(listaToppings.innerHTML); // Me retorna la estructura HTML del elemento. 

  // //* Modificar el texto de un elemento 

  // const titulo = document.getElementById("titulo")
  // // titulo.innerText = "Mis toppings favoritos"

  // //* Modificar elemento.
  // const enlace = document.getElementsByTagName("a");

  // //obtener atributo
  // console.log(enlace[0].getAttribute("href"));

  // //eliminar atributo
  // // console.log(enlace[0].removeAttribute("href"));

  // //actualizar atributo
  // console.log(enlace[0].setAttribute("href", "https://www.freecodecamp.org"));

// //* Agregar y modificar clases 

// const primerTopping = document.querySelector(".topping");

// //agregar clase - por ejemplo agregarle una clase de color que en el css le puse propiedad y de repente necesito que tome esas propiedades. 
// primerTopping.classList.add("texto-verde");
// console.log(primerTopping.classList);

// // Verificar si una clase existe 
// console.log(primerTopping.classList.contains("fondo-naranja"));

// //*Eliminar una clase 
// // primerTopping.classList.remove("topping")

// //* Crear un elemento de cero 

// const listaDeToppings = document.getElementById("lista-topings")

// const toppingNuevo = document.createElement("li");

// toppingNuevo.classList.add("topping", "fondo-marron")
// toppingNuevo.innerText = "Queso extra";

// // listaDeToppings.append(toppingNuevo)
// listaDeToppings.appendChild(toppingNuevo) // es equivalente al append

// //*Eliminar elementos 

// // toppingNuevo.remove();

// listaDeToppings.append("Hola") //Agrega un texto pero no es parte de un elemento HTML

//* Recorrer DOM
// const listaDeToppings = document.getElementById("lista-topings")

//Parent element solo incluye elementos HTML, parentNode incluye textos, comentarios y todo lo que es considerado nodo. 

//Puede ser util si quiero que mientras accedo al hijo quiero que ocurra algo en padre. 
//Por ejemplo si hago clickj en Aceitunas quiero que mi color de fondo de toppings se cambie

// console.log(listaDeToppings.parentElement.parentElement); //Puede acceder al padre del padre 

// console.log(listaDeToppings.children);
// console.log(listaDeToppings.firstChild); //pero esto trabaja por nodos y me traerá el texto que encuentra por la identación y saldrá text. Lo conveniente es usar childres[0]
// console.log(listaDeToppings.children[0]);

// //Si quiero obtener primer y último elemento HTML y no nodo, usamos element
// console.log(listaDeToppings.firstElementChild); 
// console.log(listaDeToppings.lastElementChild); 

// //Obtener hermano 
// console.log(listaDeToppings.previousElementSibling); //en este caso me trae h1 que está a la par de body  
// console.log(listaDeToppings.nextElementSibling); //en este caso no me trae ninguno porque no tengo más elementos después del body 

//* Eventos del DOM
//Conceptos importantes 
// Elemento target --> blanco en donde ocurrirá el EventCounts, donde el usuario por ejemplo hará click 
// trigger --> Desencadenar, acción que desencadenará un evento. por ejemplo hacer click
// Event Handler--> Función que se ejecuta cuando ocurre un evento 
// Event listener --> Asociación del evento y la función. Escuchador de eventos, Cuando en un elemento específico ocurra algo, ejecute una función. 

//Llamando a una función directamente en el onclick 
// function mostrarClick(topping) {
//   console.log(topping);
// }

//* usando método addEventLister

const toppings = document.getElementsByClassName("topping");

//La función va a recibir un evento y ese es el objeto que va a recibir como argumento. 
function mostrarClick(e) {
  console.log(e.target.innerText);
}

// El primer parámetro será el click, o hover, etc, y el segundo parámetro será la función, sin paréntesis, importante.  
// albahaca.addEventListener('click', mostrarClick)

// for (const topping of toppings) { 
//   topping.addEventListener('click', mostrarClick)
// }

//Si la función es pequeña o precisa se puede definir en el mismo addEventListener 

for (const topping of toppings) { 
  topping.addEventListener('click', (e) => {
    console.log(e.target.innerText);
  });
}
