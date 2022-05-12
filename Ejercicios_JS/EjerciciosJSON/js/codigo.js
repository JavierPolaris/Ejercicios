
//   var perro =  [
//         {
//           "nombre": "Francisco Ramirez",
//           "edad": 29,
//           "puesto": "Contable",
//           "Emails": [
//             "francisco@gmail.com",
//             "francisco@hotmail.es",
//             "francisco@thebridgeschool.es"
//           ]
//         },
//         {
//             "nombre": "Isabel Pérez",
//             "edad": 31,
//             "puesto": "Profesora",
//             "Emails": [
//               "isabel@gmail.com",
//               "isabel@hotmail.es",
//               "isabel@thebridgeschool.es"
//             ]
//           }
//       ]
//     console.log(perro[0].Emails[2])
//     console.log(perro[1].puesto)




// console.log(JSON.parse('{}'));              // {}
// console.log(JSON.parse('true'));            // true
// console.log(JSON.parse('"que guapo"'));           // "foo"
// console.log(JSON.parse('[1, 5, "pesao"]')); // [1, 5, "false"]
// console.log(JSON.parse('null'));            // null
// console.log(JSON.parse('{"nombre": "Davinia", "apellido": "de la Rosa"}')); //{nombre: "Davinia", apellidos: "de la Rosa"}
// console.log(JSON.parse('{"nombre": "Davinia", "apellido": "de la Rosa"}').nombre); //Davinia
// var objeto = JSON.parse('{"nombre": "Davinia", "apellido": "de la Rosa"}');
// //Formas de acceso equivalentes
// console.log(objeto.apellido);
// console.log(objeto["apellido"]);

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



// var x1 = new Boolean(false);
// var x2 = new Boolean(false);
// console.log(x1);


// if (x1) { //Dirección de memoria
//     console.log("Entro en el if");
// }else{
//     console.log("No entro en el if");
// }

// console.log(x1==false);
// console.log(x1===false);
// console.log(x1==true);
// console.log(x1==x2); //Direcciones de memoria
// console.log(x1===x2); //Direcciones de memoria
// console.log(JSON.stringify(x1) == JSON.stringify(x2)); //Pasamos el objeto a string y comparamos

// var x3 = false;
// if (x3) { //false
//     console.log("Entro en el if");
// }else{
//     console.log("No entro en el if");
// }

// console.log(x2.toString());
// var x4 = x2.toString(); //Convierte a cadena de caracteres
// console.log(x4[0] + " " +x4[1] + " " + x4.charAt(2) + " " + x4.charAt(3) + ` ${x4[4]}`);
// console.log(x2.valueOf());
// console.log(typeof(x1));
// console.log(typeof(x3));
// console.log(typeof(x2.valueOf));
// console.log(typeof(x2.valueOf()));
// console.log(Boolean(1 > 3));    //booleano
//     console.log(!!(7 > 3));         //booleano 
//     console.log(new Boolean(7 > 3)); //dirección de memoria
//     console.log(typeof(Boolean(1 > 3)));//booleano
//     console.log(Boolean(1 > 3));    //booleano
//     console.log(!!(7 > 3));         //booleano 
//     console.log(new Boolean(7 > 3)); //dirección de memoria
//     console.log(typeof(Boolean(1 > 3)));//booleano
//     console.log(typeof(Boolean));//Función

//     console.log(Boolean("Hola"));   //true
//     console.log(Boolean([1,2,3]));  //true
//     console.log(Boolean(new String("Hola")));   //true
//     console.log(typeof(Boolean(new String("Hola"))));   //boolean

//TODO Ejercicio 7_3
//TODO Utilizando objetos Boolean realiza un programa que indique si un array de 6 elementos solicitado al usuario se encuentra ordenado de la siguiente forma (e1 > e3, e2 < e4 y e5 = e6)
document.getElementById('boton').addEventListener('click', (e) => {
    e.preventDefault();

    var entrada1 = document.getElementById('entrada').value;
    var numeros= [];
    var cadena = numeros.push(entrada1);

    
    console.log(numeros)
    // var array = [4,2,1,5,7,7];
    var boll = new Boolean(entrada[0] > entrada[2]);
    var boll1 = new Boolean(entrada[1] < entrada[3]);
    var boll2 = new Boolean(entrada[4] == entrada[5]);

    if (boll.valueOf() && boll1.valueOf() && boll2.valueOf()) {
        console.log("Esta ordenado")
    } else {
        console.log('todo mal')
    }

})


// const string1 = "Una cadena primitiva";
// console.log(string1);
// const string2 = 'También una cadena primitiva';
// console.log(string2);
// const string3 = `Otra cadena primitiva más con un ${"template"}`;
// console.log(string3);
// const string4 = new String("Un objeto String");
// console.log(string4);
// console.log(string4.valueOf);
// console.log(string4["valueOf"]);
// const nombreF = "valueOf";
// console.log(string4[nombreF]);
// console.log(string4.valueOf()); 
// console.log(typeof(string1));
// console.log(typeof(string4));
// console.log(typeof(string4[nombreF]));


// let frutas = ["Manzana", "Banana"];
// let frutasObject = new Array("Fresa", "Piña");
// let frutasObject2 = new Array(["Fresa", "Piña"]);

// console.log(frutas);
// console.log(frutasObject);
// console.log(frutasObject2);
// console.log(frutas.length);
// console.log(frutasObject.length);
// console.log(frutasObject2.length);
// console.log(frutas[0]);
// console.log(typeof(frutas));
// console.log(typeof(frutas[0]));
// console.log(typeof(frutasObject));
// console.log(typeof(frutasObject[0]));
// console.log(typeof(frutasObject2));
// console.log(typeof(frutasObject2[0]));
// console.log(typeof(frutasObject[0][1]));

