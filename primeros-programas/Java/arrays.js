
//recorriendo un array

var array = [1, "Pedro", true, false, "Juan"];

for (var i = 0; i < array.length; i ++) {
  console.log(array[i]);
}

//modificando un array

var array = [1, "Pedro", true, false, "Juan"];
array[4] = "david";

//insertando elementos en un array

var array = ["Pedro"];
array.push("David");
array.push("german");

//insertando elementos en una posicion especifica de un array(siempre se le deben pasar 3 valores)

var array = ["Pedro", "Germán", "Diana"];
array.splice(1,0,"Steven")

//Eliminando elementos en una posicion especifica de un array(siempre se le deben pasar 2 valores)

var array = ["Pedro", "Germán", "Diana"];
array.splice(1, 1); // ["Pedro", "Diana"]

var array = ["Pedro", "Germán", "Diana"];
array.splice(0); // []

//-----------RETO--------------
var array = ["Simón", "Natalia", "Nayib", "Diana", "Germán"];
console.log(array);

var elem = [1, 2, 3, 4, 5]
var elemAtIndexOne = elem[1];   // 2
var elemAtIndexThree = elem[3];  // 4
var message = "Los elementos a imprimir son " + elemAtIndexOne + " y " + elemAtIndexThree;

console.log(message);  


var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
var newArray = ["Quinto", "Sexto"];
var i = 0;
var elem = arr.splice(4, 1)[0];

newArray.push(elem);

for (i = 0; i < newArray.length; i++) {
  arr.push(newArray[i]);
}

for (i = 0; i < arr.length; i++ ) {
  console.log(arr[i]);
}


