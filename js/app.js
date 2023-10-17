const mostrar = document.getElementById("respuesta");

function validar(){
    const numero = document.getElementById("numero").value;
    if (numero % 100 == 0) {
        mostrar.innerHTML = `<p id="respuesta">El numero ${numero} es divisible por 100.</p>`;
    } else {
        mostrar.innerHTML = `<p id="respuesta">El numero ${numero} no es divisible por 100.</p>`;
    }
}