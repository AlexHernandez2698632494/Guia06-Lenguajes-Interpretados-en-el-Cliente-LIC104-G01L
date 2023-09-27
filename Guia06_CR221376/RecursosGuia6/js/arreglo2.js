//Accedemos al contenedor donde se mostrara los estudiantes
const containerArreglo = document.querySelector("#idcontainerArreglo");
const containerArregloOrdenado = document.querySelector(
    "#idContainerArregloOrdenado"
);
const containerArregloDesendente = document.querySelector(
    "#idContainerArregloDesendente"
);
//Accedemos a cada boton por medio de la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnordenar = document.querySelector("#idBtnOrdenar");
const btdesentente = document.querySelector("#idBtnDesendente");
const btnCleanSlate = document.querySelector("#idBtnCleanSlate");
//Agregamos el evento click a los botones, adicionalmente 
//se le asigna la funcion que realizará la operación
btnAgregar.addEventListener("click", agregarElemento);
btnordenar.addEventListener("click", ordenarElementos);
btdesentente.addEventListener("click", ordenarElementos2);
btnCleanSlate.addEventListener("click", CleanSlate);
let arreglo = new Array();

function agregarElemento() {
    const numero = parseInt(document.querySelector("#inputNumero").value);
    //verificando que sea un numero
    if (isNaN(numero)) {
        alert("Debe ingresar un numero válido");
    } else {
        //Agregamos un nuevo alemento al arreglo
        arreglo.push(numero);

        //Utilizaremos la API DOM para crear un elemento html 
        let caja = document.createElement("div"); //Creamos un elemento <div></div>
        caja.className = "col-md-1 colum"; //Agregamos una clase al elemento <div></div> 
        let valor = document.createElement("h3"); //Creamos un elemento <h3></h3> 
        valor.textContent = numero; //Agregamos texto al elemento <h3></h3> 
        caja.appendChild(valor); //Le pasamos como hijo la etiqueta <h3></h3> a nuestro <div></div>

        //Insertamos los nuevos elementos en el contenedor
        //se utiliza beforeend para insertar el nuevo 
        //elemento dentro del idContainer Arreglo y despues de su ultimo hijo
        containerArreglo.insertAdjacentElement("beforeend", caja);
    }
}
function ordenarElementos() {
    //utilizaremos un for...of para recorrer el arreglo
    //¡a su vez se utilizara .sort() para ordenarlo
    for (let i of arreglo.sort()) {
        let caja = document.createElement("div");
        caja.className = "col-md-1 colum-green";
        let valor = document.createElement("h3");
        valor.textContent = i;
        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement("beforeend", caja);
    }
}
function ordenarElementos2() {
    // Utilizamos .slice() para hacer una copia del arreglo original
    // Recorremos el arreglo ordenado y mostramos los elementos en orden descendente
    for (let i of arreglo.slice().sort((a, b) => b - a)) {
        let caja = document.createElement("div");
        caja.className = "col-md-1 colum-blue";
        let valor = document.createElement("h3");
        valor.textContent = i;
        caja.appendChild(valor);
        containerArregloDesendente.insertAdjacentElement("beforeend", caja);
    }
}
function CleanSlate() {

    containerArreglo.innerHTML = '';
    containerArregloOrdenado.innerHTML = '';
    containerArregloDesendente.innerHTML = '';
    arreglo = [];
    // Agrega los títulos <h3> nuevamente
    const tituloArreglo = document.createElement("h3");
    tituloArreglo.textContent = "Valores del arreglo ingresado";
    containerArreglo.appendChild(tituloArreglo);

  const tituloArregloOrdenado = document.createElement("h3");
    tituloArregloOrdenado.textContent = "Arreglo ordenado";
    containerArregloOrdenado.appendChild(tituloArregloOrdenado);

    const tituloArregloDesendente = document.createElement("h3");
    tituloArregloDesendente.textContent = "Arreglo Descendente";
    containerArregloDesendente.appendChild(tituloArregloDesendente);

}
