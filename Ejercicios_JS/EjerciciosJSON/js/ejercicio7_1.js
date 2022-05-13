//TODO Ejercicio 7_1
//TODO Código para obtener el país de la localidade 8
//TODO Código que permite añadir una localidad a tu elección
//TODO Modifica la localidade 4, añadiendo el número de habitantes
//TODO Cambia la estructura del JSON de forma que sea más directo acceder a
//TODO las capitales de las localidades, dado que va a ser el dato que más vamos a consultar

var objeto = [{
    "localidade 1": {
        "Continente": "África",
        "País": "Angola",
        "Capital": "Luanda"
    },
    "localidade 2": {
        "Continente": "América do Norte",
        "País": "Estados Unidos",
        "Capital": "Washington DC"
    },
    "localidade 3": {
        "Continente": "América Central",
        "País": "México",
        "Capital": "Cidade do México"
    },
    "localidade 4": {
        "Continente": "América do Sul",
        "País": "Brasil",
        "Capital": "Brasília"
    },
    "localidade 5": {
        "Continente": "Europa",
        "País": "Espanha",
        "Capital": "Madri"
    },
    "localidade 6": {
        "Continente": "Europa",
        "País": "Alemanha",
        "Capital": "Berlim"
    },
    "localidade 7": {
        "Continente": "Oceania",
        "País": "Austrália",
        "Capital": "Camberra"
    },
    "localidade 8": {
        "Continente": "Ásia",
        "País": "Japão",
        "Capital": "Tóquio"
    }
}]

//TODO Código para obtener el país de la localidade 8
console.log(objeto[0]["localidade 8"]["Continente"]);

//TODO Código que permite añadir una localidad a tu elección;
objeto[0]['localidade 9'] = new Array('"localidade 9":{ "Continente": "Ásia","País": "Japão","Capital": "Tóquio"}"')

//TODO Modifica la localidade 4, añadiendo el número de habitantes
objeto[0]['localidade 4']['Nº Habitantes'] = '1000000'
// console.log(objeto[0]);

//TODO Cambia la estructura del JSON de forma que sea más directo acceder a
//TODO las capitales de las localidades, dado que va a ser el dato que más vamos a consultar
var objeto1 = [{
    "LAD": {
        "Continente": "África",
        "Pais": "Angola",
        "Capital": "Luanda"
    },
    "WDC": {
        "Continente": "América do Norte",
        "Pais": "Estados Unidos",
        "Capital": "Washington DC"
    },
    "MEX": {
        "Continente": "América Central",
        "Pais": "México",
        "Capital": "Cidade do México"
    },
    "BR": {
        "Continente": "América do Sul",
        "Pais": "Brasil",
        "Capital": "Brasília"
    },
    "MD": {
        "Continente": "Europa",
        "Pais": "Espanha",
        "Capital": "Madri"
    },
    "TXL": {
        "Continente": "Europa",
        "Pais": "Alemanha",
        "Capital": "Berlim"
    },
    "CBR": {
        "Continente": "Oceania",
        "Pais": "Austrália",
        "Capital": "Camberra"
    },
    "HND": {
        "Continente": "Ásia",
        "Pais": "Japão",
        "Capital": "Tóquio"
    }
}]

// TODO A partir de la siguiente información, diseña y elabora un JSON que la contenga
// TODO y permita acceder de manera lo más sencilla posible, a precio y calorías de cada desayuno.
merendola = [{

    "Gofres Belgas": {
        "precio": 5.95,
        "descripcion": "Dos de nuestros famosos Gofres Belgas con abundante sirope",
        "calorias": 650,
    },

    "Gofres Belgas con fresas": {
        "precio": 7.95,
        "descripcion": "Ligeros gofres belgas cubiertos de fresas y nata montada",
        "calorias": 900,
    },

    "Gofres Belgas con frutas del bosque": {
        "precio": 8.95,
        "descripcion": "Ligeros gofres belgas cubiertos de frutas del bosque y nata montada",
        "calorias": 900,
    },

    "Tostada francesa": {
        "precio": 4.50,
        "descripcion": "Dos gruesas rebanadas de nuestro pan francés casero",
        "calorias": 600,
    },

    "Desayuno de la casa": {
        "precio": 6.95,
        "descripcion": "Dos huevos, bacon o salchicha, tostada y patatas fritas",
        "calorias": 950,
    },
}]


console.log(merendola)
