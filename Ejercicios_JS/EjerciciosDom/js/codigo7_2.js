// Ocultar el enlace Seguir leyendo.
// Mostrar el texto incluido dentro del span
function muestra() { 
   document.getElementById('enlace1').style.visibility = "hidden"
   document.getElementById('enlace2').style.display = "inline"
   document.getElementById('adicional').style.display = "block"
  

}

// Una vez acabada esta parte, realizar lo siguiente:

// Crear un nuevo evento en el enlace2 que llamará a la función oculta().
// Dicha función ocultará el enlace2, el texto el span
// y volverá a mostrar el enlace Seguir leyendo.

function oculta() { 
    document.getElementById('enlace1').style.visibility = "visible"
    document.getElementById('adicional').style.display = ""
    document.getElementById('enlace2').style.display = ""
 
 }
// Cambia todos los ejercicios de funciones para eliminar
// todos los alert y los prompts