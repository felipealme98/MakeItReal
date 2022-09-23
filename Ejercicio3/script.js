function caracteresEnComun(str1, str2){

    let letra = [];

   for(let ch of str1){

    if(str2.includes(ch)){

        letra.push(ch);
      
    }

   }
    
     
    return letra;

}


console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye")); // []