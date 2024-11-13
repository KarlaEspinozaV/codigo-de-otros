// Tenemos un li de productos

const productos = [
	{
		nombre: "Zapato negro",
		tipo: "zapato",
		color: "negro",
		img: "./taco-negro.jpg",
	},
	{
		nombre: "Zapato azul",
		tipo: "zapato",
		color: "azul",
		img: "./taco-azul.jpg",
	},
	{
		nombre: "Bota negra",
		tipo: "bota",
		color: "negro",
		img: "./bota-negra.jpg",
	},
	{ nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
	{
		nombre: "Zapato rojo",
		tipo: "zapato",
		color: "rojo",
		img: "./zapato-rojo.jpg",
	},
];

//getElementsByName es intercambiado por getElementById ya que estamos seleccionando el elemento por su id
//Para mejorar la legitibidad, se remombra "li" por listaProductos
const listaProductos = document.getElementById("lista-de-productos");
//se agregan comillas dobles a input para mantener el formato
//Para mejorar legitibidad, se renombra $i por inputUsuario
const inputUsuario = document.querySelector(".input");

//Se asigna displayProductos a una funcion, ya que solo se nombraba pero no estaba asignada
function displayProductos(productos) {
	for (let i = 0; i < productos.length; i++) {
		//se intercambian var por let para optimizar el codigo
		//Para mejorar la legitibidad, se renombra "d" por divElement
		let divElement = document.createElement("div");
		divElement.classList.add("producto");

		//Para mejorar la legitibidad del codigo, cambiamos "ti" por tituloElement
		let tituloElement = document.createElement("p");
		tituloElement.classList.add("titulo");
		tituloElement.textContent = productos[i].nombre;

		let imagen = document.createElement("img");
		imagen.setAttribute("src", productos[i].img);

		divElement.appendChild(tituloElement);
		divElement.appendChild(imagen);
		listaProductos.appendChild(divElement);
	}
}
displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
	while (listaProductos.firstChild) {
		listaProductos.removeChild(listaProductos.firstChild);
	}

	const texto = inputUsuario.value;
	console.log(texto);
	const productosFiltrados = filtrado(productos, texto);

	for (let i = 0; i < productosFiltrados.length; i++) {
		let divElement = document.createElement("div");
		divElement.classList.add("producto");

		let tituloElement = document.createElement("p");
		tituloElement.classList.add("titulo");
		tituloElement.textContent = productosFiltrados[i].nombre;

		let imagen = document.createElement("img");
		imagen.setAttribute("src", productosFiltrados[i].img);

		divElement.appendChild(tituloElement);
		divElement.appendChild(imagen);

		listaProductos.appendChild(d);
	}
};

const filtrado = (productos = [], texto) => {
	return productos.filter(
		(item) => item.tipo.includes(texto) || item.color.includes(texto),
	);
};
