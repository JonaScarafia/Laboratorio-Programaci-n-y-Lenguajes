function ingresaNumero() {

    var numeroIngresado = prompt("Ingrese un número para verificar si es par o impar");

    var numeroIngresado2 = parseInt(numeroIngresado);

    return numeroIngresado2
}

function esParImpar(numeroIngresado2) {



    if ((numeroIngresado2 % 2) === 0) {
        
        document.write("El número Ingresado es Par");

    } else {
        document.write("El número Ingresado es Impar")
    }

}

function esDivisible(numeroIngresado2) {
    console.log(numeroIngresado2)
    if (((numeroIngresado2 % 2) === 0)) {
        document.write(", divisible por 2")
    }
    if ((numeroIngresado2 % 3) === 0) {
        document.write(", divisible por 3")
    }
    if ((numeroIngresado2 % 5) === 0) {
        document.write(", divisible por 5")
    } else { document.write("El número no es divisible por 2 3 y 5") }
}

function esPrimo(numeroIngresado2) {
    if ((numeroIngresado2 % numeroIngresado2) === 0 && ((numeroIngresado2 % 1) === 0)) {
        document.write(" y el número es Primo");

    } else { document.write(" y no es número Primo") }
}


