function frecuencias(str){

    var resultado = {};
    for (var i=0; i< str.length;i++) {

        var letra = str.charAt(i);

        if (resultado[letra]) {

            resultado[letra]++;

        } 

        else {

            resultado[letra] = 1;

        }
    }
    
    return resultado;

}


console.log(frecuencias("hola mundo"));

// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }