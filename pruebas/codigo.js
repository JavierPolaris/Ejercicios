
let razas = []
let cont = 0;
let contStorage = 0;

//TODO boton random y almacenar la url de la imagen
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();


    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())                                        //recoger los datos de la API
        .then(json => crearImg(json));


    function crearImg(url) {
        document.getElementById('perro' + cont).src = `${url.message}`
        document.getElementById('perro').src = `${url.message}`

        let urlCortada = (url.message.split('/'));
        razas.push(urlCortada[4]);


        let repetido = false;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key == urlCortada[4]) {
                console.log("REPEEEE")
                let contador = parseInt(JSON.parse(localStorage.getItem(`${key}`)).cazado)
                
                contador++;
                localStorage.setItem(urlCortada[4], JSON.stringify({
                    cazado: contador,
                }));
                
                repetido = true;
            }
            //Leer
        }

            if (!repetido) {
                localStorage.setItem(urlCortada[4], JSON.stringify({
                    cazado: 1,
                }));
            }

        }
            cont++
        
    
});
