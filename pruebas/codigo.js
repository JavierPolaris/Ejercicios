// Utilizando la siguiente API: https://dog.ceo/dog-api/

// Que devuelve imágenes aleatorias, habrá que ir coleccionando diferentes razas de perros pulsando un botón e ir rellenando una matriz (4x5) como la que se ve en las imágenes.

// Se va añadiendo cada imágen a una casilla, además de almacenar los perros que van apareciendo para poder sacar estadísticas al final.

// En caso de que alguna raza esté repetida, no se pondrá en la colección.

// Cuando se haya completado todo el álbum aparecerá una gráfica de todas las razas que han salido y la de veces que se han ido contando.

// Las imágenes ilustran el funcionamiento, pero la apariencia de la aplicación depende del grupo y se debe cuidar tanto como el funcionamiento; además se deben usar conocimientos de Flexbox y Grid en la medida de las posibilidades del diseño.





// a user is redirected to a different page with the location.replace method
let razas = []
let cont = 0;

// console.log(huecos)
//TODO boton random y almacenar la url de la imagen
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();


    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => crearImg(json));  //meto el json dentro de una funcion

        //llamo a la funcion del json para darle a los src de id"perros" la url de la API
    function crearImg(url) {
        document.getElementById('perro' + cont).src = `${url.message}`
        document.getElementById('perro').src = `${url.message}`

        //almaceno la raza en un array
        var urlCortada = (url.message.split('/'));
        razas.push(urlCortada[4])
        console.log(razas);
       
    }
    cont++; //cada vez que doy al boton pasa al siguiente cuado
});


