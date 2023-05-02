function ingreseDni() {

    var dniIngresado = prompt("Ingrese su número de DNI");

    if (dniIngresado.length > 8 || dniIngresado.length <= 1) {

        document.write("Documento Ingresado invalido! Chequee");

    }

    return dniIngresado;
    //ventana modal
}


function asignacionLetra(dniIngresado) {

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var letraAsignada;
    var resto;

    for (let i = 0; i < letras.length; i++) {

        if (dniIngresado % 23 === i) {

            letraAsignada = letras[i];

        }
    }

    return letraAsignada;

}

function creacionClave(dniIngresado,letraAsignada) {

    //console.log(letraAsignada);
    claveDni= dniIngresado+letraAsignada;
   
    return claveDni;
}

function accesoSistema(claveDni){
    
    var claveIngresada= prompt("Ingrese Clave generada!!! ");

    if (claveIngresada==claveDni) {
        document.write("Bienvenido al sistema!!! " + claveDni + " Disfrute el sistema");
    }else{
        document.write("Clave Incorrecta!!!!");
    }
}

function principal() {

    dniUsuario = ingreseDni();
    asignacionLetra(dniUsuario);
    letraUsuario = (asignacionLetra(dniUsuario));
    creacionClave(letraUsuario);
    claveUsuario = creacionClave(dniUsuario,letraUsuario);
    alert(" Su clave se genero Exitosamente!!! " + claveUsuario);
    accesoSistema(claveUsuario);

}

