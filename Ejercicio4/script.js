function ajustarTexto(str, num){
let x = [];

        for(let i = 0; i < num; i++){

            x.push(str[i]);


        }

return x;

}


console.log(ajustarTexto("", 3)) // " " 
console.log(ajustarTexto("hola", 2)) // "ho" 
console.log(ajustarTexto("Hola", 0)) // "" 
console.log(ajustarTexto("Hola", 5)) // "Hola "

