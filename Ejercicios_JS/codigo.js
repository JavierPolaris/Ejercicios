"use strict"

let frutas = ["Banana","Coco","Mango","Fresa"];
let newfrutas = frutas.push("")

function añadirFruta() {
     window.prompt(frutas)
};

function borrarFruta() {
    frutas.pop();
    console.log(frutas)
    
};


// function añadirFruta(evt) {
//     evt.preventDefault();
  
//     let fruta = document.getElementById("fruta").value;
  
//     if (fruta == "") {
//       alert("Tienes que inserta una fruta");
//     } else {
//       let opcion = "<li> " + fruta + "</li>";
  
//       let lista = document.getElementById("lista-fruta");
  
//       lista.innerHTML += opcion;
  
//       alert("Se ha insertado una fruta");
//     }
  
//   }