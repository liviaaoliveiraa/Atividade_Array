let frutas = ["Maça" , "Cereja" , "Morango" , "Manga" , "Mamão" , "Carambola"];

let quantidadeDeFrutas = frutas.length;

console.log ("Frutas:") ; 
console.log (`Nós temos ${quantidadeDeFrutas} frutas em nosso sistema`);
console.log ("---------------------------") ; 

for (let i = 0; i< quantidadeDeFrutas; i ++){
    console.log (frutas [i]);
}