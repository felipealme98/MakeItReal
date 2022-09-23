//Escribe una función llamada numDuplicados que reciba un string y retorne el número de caracteres que aparecen más de una vez.

//  .   Encuentra un caracter
//  n+  Busca en el string
//  g   Global match
function numDuplicados(str){


    

    let matches = str.split("").sort().join("").match(/(.)\1+/g).length;

    






    

return matches; 
}        

  

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0 