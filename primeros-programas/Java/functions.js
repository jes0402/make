function hello(){
    console.log("hola mundo");
}

function hello(name) {
    console.log("Hola " + name);
  }
  
  hello("Germán");
  hello("David");
  
  function hello(name) {
    return "Hola " + name;
  }

  //podemos llamar la funcion de dos manera 

  var g1 = hello("Germán"); 

  // o de esta manera
  console.log(hello("David"));


  function hello(name) {
    return "Hola " + name;
    console.log("Esto nunca se va a imprimir");
  }
  
  console.log(hello("Pedro"));

  function bmi(weight, height) {
    return weight / height ** 2
  }
  
  console.log("Tu IMC es: " + bmi(80, 1.8));

  //RETO------------------

  function greetings(nombre, apellido){

      return "mi nombre es " + nombre + " y mi apellido es " + apellido;
    
  }

  console.log(greetings ("nayib", "abdala"));

  function greetings(nombre, apellido){

    return "mi nombre es " + nombre + " y mi apellido es " + apellido;
  
}

console.log(greetings ("German", "escobar"));


function greetings(nombre, apellido){

    return "mi nombre es " + nombre + " y mi apellido es " + apellido;
  
}

console.log(greetings ("simon", "hoyos"));


//-----RETO---------------------

function suma (num1, num2){
    return num1 + num2
}

console.log(suma (50, 200))

//--------RETO---------------

function sayMyName(name) {
    return ("Tu nombre es " + name);
  }
  
  var name = "Nayib";
  console.log(sayMyName(name));