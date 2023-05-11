
const enviar = document.querySelector('#enviar');

const inputTexto = document.querySelector('#input-texto');
const inputTexto1 = document.querySelector('#input-texto1');

const parrafo = document.querySelector('#parrafo');

function mostrar() {
    const nombre = inputTexto.value
    const apellido = inputTexto1.value

    parrafo.textContent = "hola" + " " + nombre + " " + apellido
}

enviar.addEventListener('click', mostrar)

const suma = document.querySelector('#sumar');
const primer_numero = document.querySelector('#primer_numero');
const segundo_numero = document.querySelector('#segundo_numero');
const resultado = document.querySelector('#resultado')

function sumar () {
    const num1 = primer_numero.value
    const num2 = segundo_numero.value

    if (num1 === "" || num2 === "") {
        alert("completa..no te hagas el boludo")
        return

    }

    const num1combertido= parseInt(num1)
    const num2combertido= parseInt(num2)
    resultado.textContent = num1combertido + num2combertido

}

suma.addEventListener('click',sumar)