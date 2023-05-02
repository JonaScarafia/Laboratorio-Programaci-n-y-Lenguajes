function analizoPalabra() {
    var palabra;
    var minusculas = "abcdefghyjklmnñopqrstuvwxyz";
    var mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

    var cuentaMinus = 0;
    var cuentaMayus = 0;

    palabra = prompt("Ingrese una Palabra");
    
    for (i = 0; i < palabra.length; i++) {

        if (minusculas.indexOf(palabra.charAt(i), 0) != -1) {
            cuentaMinus = cuentaMinus + 1;
        } else if (mayusculas.indexOf(palabra.charAt(i), 0) != -1) {
            cuentaMayus = cuentaMayus + 1;
        }
    }
document.write("La palabra contiene "+cuentaMinus+" Min&uacute;sculas"+"<br>");
document.write("La palabra contiene "+ cuentaMayus+" May&uacute;sculas");

}