




// document.querySelector('#c').addEventListener('click', () => {
//     letra3 = 'c';
// });

document.getElementById('boton').addEventListener('click', (e) => {
    e.preventDefault();
    var cadena = document.getElementById('frase').value;
    var letraA = document.getElementById('a').checked;
    var letraB = document.getElementById('b').checked;
    var letraC = document.getElementById('c').checked;
    var letraD = document.getElementById('d').checked;
    var letraE = document.getElementById('e').checked;
    var letraF = document.getElementById('f').checked;
    var letraG = document.getElementById('g').checked;
    var letraH = document.getElementById('h').checked;
    var letraI = document.getElementById('i').checked;
    var letraJ = document.getElementById('j').checked;
    var letraK = document.getElementById('k').checked;
    var letraL = document.getElementById('l').checked;
    var letraM = document.getElementById('m').checked;
    var letraN = document.getElementById('n').checked;
    var letraÑ = document.getElementById('ñ').checked;
    var letraO = document.getElementById('o').checked;
    var letraP = document.getElementById('p').checked;
    var letraQ = document.getElementById('q').checked;
    var letraR = document.getElementById('r').checked;
    var letraS = document.getElementById('s').checked;
    var letraT = document.getElementById('t').checked;
    var letraU = document.getElementById('u').checked;
    var letraV = document.getElementById('v').checked;
    var letraW = document.getElementById('w').checked;
    var letraX = document.getElementById('x').checked;
    var letraY = document.getElementById('y').checked;
    var letraZ = document.getElementById('z').checked;


    
    
    var resultado = [];
    if(letraA == true){
       for(var i = 0; i < cadena.length; i++) {
                        if (cadena[i].toLowerCase() === 'a') resultado.push(i);
                    };
    }else if(letraB == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'b') resultado.push(i);
        };
    }else if(letraC == true){
       for(var i = 0; i < cadena.length; i++) {
                        if (cadena[i].toLowerCase() === 'c') resultado.push(i);
                    };
    }else if(letraD == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'd') resultado.push(i);
        };
    }else if(letraC == true){
       for(var i = 0; i < cadena.length; i++) {
                        if (cadena[i].toLowerCase() === 'c') resultado.push(i);
                    };
    }else if(letraD == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'd') resultado.push(i);
        };
    }else if(letraE == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'e') resultado.push(i);
        };
    }else if(letraF == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'f') resultado.push(i);
        };
    }else if(letraG == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'g') resultado.push(i);
        };
    }else if(letraH == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'h') resultado.push(i);
        };
    }else if(letraI == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'i') resultado.push(i);
        };
    }else if(letraJ == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'j') resultado.push(i);
        };
    }else if(letraK == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'k') resultado.push(i);
        };
    }else if(letraL == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'l') resultado.push(i);
        };
    }else if(letraM == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'm') resultado.push(i);
        };
    }else if(letraN == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'n') resultado.push(i);
        };
    }else if(letraÑ == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'ñ') resultado.push(i);
        };
    }else if(letraO == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'o') resultado.push(i);
        };
    }else if(letraP == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'p') resultado.push(i);
        };
    }else if(letraQ == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'q') resultado.push(i);
        };
    }else if(letraR == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'R') resultado.push(i);
        };
    }else if(letraS == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 's') resultado.push(i);
        };
    }else if(letraT == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 't') resultado.push(i);
        };
    }else if(letraU == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'u') resultado.push(i);
        };
    }else if(letraV == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'v') resultado.push(i);
        };
    }else if(letraW == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'w') resultado.push(i);
        };
    }else if(letraX == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'x') resultado.push(i);
        };
    }else if(letraY == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'y') resultado.push(i);
        };
    }else if(letraZ == true){
        for(var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'z') resultado.push(i);
        };
    }    
    document.querySelector("#resultado").innerHTML = resultado.length;
    
});


    

        
        