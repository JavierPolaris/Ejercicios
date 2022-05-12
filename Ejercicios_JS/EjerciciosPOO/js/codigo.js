// class Rectangulo {
//     constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//     }
// }

// var r = new Rectangulo(3,4);
// alert(r.alto+" "+r.ancho);

// Ejemplo 2: Clases como expresiones (muy parecido a las funciones)

    // // Anonima
    // let Rectangulo = class {
    // constructor(alto, ancho) {
    //     this.alto = alto;
    //     this.ancho = ancho;
    // }
    // };

    // console.log(Rectangulo.name);
    // // output: "Rectangulo"

    // // Nombrada
    // let Rectangulo = class Rectangulo2 {
    // constructor(alto, ancho) {
    //     this.alto = alto;
    //     this.ancho = ancho;
    // }
    // };
    // console.log(Rectangulo.name);
    // // output: "Rectangulo2"

//     Get y Set

// Estos métodos permiten acceder a atributos calculados, esto se entiende mejor con un ejemplo:

    // class Rectangulo {
    //     constructor (alto, ancho) {
    //         this.alto = alto;
    //         this.ancho = ancho;
    //     }
    //     // Get -> Crea un Atributo nuevo
    //     get altoAncho() {
    //         return "Alto: "+this.alto +" Ancho: "+this.ancho;
    //     }
    //     //Set
    //     set altoAncho(dimensiones){
    //         this.alto = dimensiones[0];
    //         this.ancho = dimensiones[1];
    //     }
    //     //Otro método
    //     calcArea () {
    //         return this.alto * this.ancho;
    //     }
    // }

    // const r = new Rectangulo(20, 10);
    // console.log(r.alto); // 20
    // console.log(r.ancho); // 10
    // console.log(r.altoAncho); // Alto: 20 Ancho: 10

    // r.altoAncho = [30, 40]; // Cambiamos alto y ancho
    // console.log(r.altoAncho); // Alto: 30 Ancho: 40
    // console.log(r.calcArea()); // 1200


    // Ejercicio

// Realiza con POO un programa que permita pintar en un alert
// (la salida en el alert se debe ejecutar al pinchar en un botón en el HTML) lo siguiente:

// Dimensión 1: 4
// Dimensión 2: 10

//     ++++
//    ++++++
//   ++++++++
//  ++++++++++
//   ++++++++
//    ++++++
//     ++++
 document.getElementById('btn').addEventListener('click', (e) => {
   e.preventDefault();
   
        class hexagono  {
                constructor(dimension1,dimension2) {
                        this.dimension1 = dimension1;
                        this.dimension2 = dimension2;

                }
        }


   let dimension1 = 4
   let dimension2 = 10
   let total = "";
   let space = dimension1 - 1;
  
   
   // Creamos la parte superior desde dimension1 hasta dimension2, pero incrementamos de 2 en 2
   for (let i = dimension1; i <= (dimension2); i += 2){
           // Dibujamos los espacios en cada ciclo
           for (let j = 0; j < space; j++){
               total += '🤮';
       }
         
         
       // Decrementamos la variable de espacios
       space--;
       // Dibujamos los "+" desde 0 hasta el valor actual de i, que sería desde dimension1 hasta dimension2
       for (let j = 0; j < i; j++){
               total += '💩';
       }
       // Dibujamos los espacios en cada ciclo al otro lado del hexagono
       for (let j = 0; j < space +1; j++){
        total += '🤮';
}
       // Insertamos un salto de línea
       total += '\n'
   }
   // Inicializamos la variable de espacios en 1 ya que la parte inferior requiere un espacio en el ciclo inicial
   space = 1;
   // Dibujamos la parte inferior desde dimension2-2 hasta dimension1 pero decrementamos de 2 en 2
   for (let i = dimension2-2; i >= (dimension1); i -= 2){
           // Dibujamos los espacios en cada ciclo
           for (let j = 0; j < space; j++){
               total += '🤮';
       }
       // Incrementamos la variable de espacios
       space++;
       // Dibujamos los "+" desde 0 hasta el valor actual de i, que sería desde dimension2 hasta dimension1
       for (let j = 0; j < i; j++){
               total += '💩';
       }
        // Dibujamos los espacios en cada ciclo al otro lado del hexagono
       for (let j = 0; j < space -1; j++){
        total += '🤮';
}
       total += '\n'
   }
   
   // Dibujamos el rombo
   alert(total)
   
})
    
    
    
   
   



    // function diamond(l, i = 4) {
        
    //     const MAS = '+';
    //     const SPACIO = ' ';
    //     const LINEA = SPACIO.repeat((l - i) / 2) + MAS.repeat(i);
        
        
    //     console.log(LINEA);
        
        
    //     if (i >= l) return;
    //     diamond(l, i + 2);
    //     console.log(LINEA);
        
    // }
    
    // diamond(10);


 