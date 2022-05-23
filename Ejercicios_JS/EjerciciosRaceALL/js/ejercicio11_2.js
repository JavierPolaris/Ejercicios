// Dada una lista de usuarios de github guardada en una array, utiliza 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.
// Objetivo: Usar Promise.all()
// Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
// Pregunta. ¿cuántas promesas tendremos?
// Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

// Pasos:

// Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
// Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
// Cuando Promise.all() haya terminado:
// Consigue que se imprima por consola la url del repositorio de cada usuario.
// Consigue que se imprima por consola el nombre de cada usuario.


document.getElementById('buscar').addEventListener('click', (e) => {
  e.preventDefault();

  let usuarios = ['bogdaniam','azl397985856','tomByrer','igonzaleztb','AlbLC']
  const newArray = usuarios.map(async id => {
    const user = await fetch(`https://api.github.com/users/${id}`);

    const parsedUsuar = await user.json();
    return `usuarios: ${parsedUsuar.login}  Url: ${parsedUsuar.html_url}`;
    

  })

Promise.all(newArray).then(data => {
  console.log(data)
})




});
