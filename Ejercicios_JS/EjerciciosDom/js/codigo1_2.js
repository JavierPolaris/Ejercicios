
// Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
document.getElementById('enlace_1').onclick = () => {

  document.getElementById('contenidos_1').style.display = "none";
  document.getElementById('enlace_1').innerHTML = 'Ver contenido';

}

// Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
document.getElementById('enlace_1').onmousedown = () => {
  document.getElementById('contenidos_1').style.display = "";
  document.getElementById('enlace_1').innerHTML = 'Ocultar Contenidos'
}
// Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
document.getElementById('enlace_2').onclick = () => {
  document.getElementById('contenidos_2').style.display = "none";
  document.getElementById('enlace_2').innerHTML = 'Ver contenido'
}
document.getElementById('enlace_2').onmousedown = () => {
  document.getElementById('contenidos_2').style.display = "";
  document.getElementById('enlace_2').innerHTML = 'Ocultar Contenidos'
}
document.getElementById('enlace_3').onclick = () => {
  document.getElementById('contenidos_3').style.display = "none";
  document.getElementById('enlace_3').innerHTML = 'Ver contenido'

}
document.getElementById('enlace_3').onmousedown = () => {
  document.getElementById('contenidos_3').style.display = "";
  document.getElementById('enlace_3').innerHTML = 'Ocultar Contenidos'
}
// Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:propiedad innerHTML)