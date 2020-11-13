var str = "hola mundo";

for (var i = 0; i < str.length; i++){
    console.log(str[i]);
}

//convertir cadenas en arreglos
"ten paciencia".split("")
"ten paciencia".split(" ")
"ten, paciencia, amiga".split(",")


//convertir arreglos a una cadena
["hola", "bebe"].join(" ")
["hola", "bebe"].join("-")
["hola", "bebe"].join()

"HELLO".toLowerCase()  //de mayuscula a minuscula
"hello".toUpperCase()  //de minuscula a mayuscula

//nos permite saber en que empieza y termina la frase
"hola bebe".startsWith("Hola")
"hola bebe".endsWith("bebe")

//o se pueden anidar y usar los dos metodos

"HELLO bebe".toLowerCase().startsWith("hello")

//Se pueden substraer una porcion de la cadena

"Hola Mundo".substr(0, 4)

 "Hola Mundo".substr(5)

 "Hola Mundo".substring(5,7)

 //o reemplazar un trozo de la cadena

 "Hola Mundo".replace("Mundo", "Germán")

//Puedes validar si la cadena contiene una subcadena específica

"Hola Mundo".includes("pola")

//------------------reto--------

function countingEs(string) {
    var count = 0;
    for(var  i = 0 ; i < string.length; i++){
        if (string[i] === "e"){
            count += 1
        }
    }
    return count;
}

console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);


function message (array){
    return array.join(" ")
}

console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); 

//--------------RETO------------

function generatePassword(string) {
    var password = '';
  
    for(var i = 0; i < string.length; i++) {
      var char = string[i].toLowerCase();
  
      if(char === ' ') {
        char = '';
      } else if(char === 'a') {
        char = 4;
      } else if(char === 'e') {
        char = 3;
      } else if(char === 'i') {
        char = 1;
      } else if(char === 'o') {
        char = 0
      }
  
      password += char
    }
    return password;
    }


    console.log(generatePassword("gato"));

function capitalize(string){
    return string.toUpperCase([0])
}
console.log(capitalize("pedro perez")); 
