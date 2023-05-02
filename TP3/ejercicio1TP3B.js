function analizoPalabra() {
    var palabra;


    palabra = prompt("Ingrese una Palabra");

    var palabraMin = palabra.toLowerCase();
    var palabraMay = palabra.toUpperCase();

    console.log(palabraMin);
    console.log(palabraMay);

    if (palabra === palabraMin) {
        
        document.write("La palabra contiene Min&uacute;sculas");
    } else if (palabra === palabraMay) { document.write("La palabra contiene May&uacute;sculas") }

   else { document.write("La palabra contiene combinaci&oacute;n de las dos Min&uacute;sculas y May&uacute;sculas") };
}