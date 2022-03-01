//navigator
//window
//document

console.log(navigator);
console.log(window);
console.log(document);

//boton Navegador
let btnNavegador = document.querySelector("#btnNavegador");
btnNavegador.addEventListener("click", mostrarNavegador);

function mostrarNavegador(){
    alert(navigator.userAgent);    
}

//boton secundario
var btnSecundario = document.getElementById("btnSecundario");

btnSecundario.onclick = function(){
    window.open("https://randallchacon.com");
};

var inputPassword = document.getElementById("exampleInputPassword1");
var inputClass = document.getElementsByClassName("btn btn-dark"); 
var etiquetaH1 = document.getElementsByTagName("h1");


var piePag = document.querySelector("footer");
let nombre = "";


var mostrarInformacion = function(){
    nombre = prompt("ingrese su nombre:");
    var nombreNode = document.createTextNode(nombre + " ");
    piePag.append(nombreNode, document.createElement('span'));
}

const btnInfo = document.querySelector(".btn-info");
btnInfo.onclick = mostrarInformacion;

let parrafoFooter = document.querySelector("#pFooter");
var btnFooter = document.querySelector(".btn-danger");

btnFooter.addEventListener("click", function(){
    parrafoFooter.remove();
});


