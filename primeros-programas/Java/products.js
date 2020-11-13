
//recorriendo objetos

var products = [
    { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
  ];

  for (var i=0; i < products.length; i++) {
    var product = products[i];
    console.log(product.name);
    console.log("  Id: " + product.id);
    console.log("  Precio: " + product.price);
    console.log("  Categorías: " + product.categories.join(", "));
  }

  var recipe = {
      "leche En Polvo": "1 litro",
      "chocolate En Barra": "3 barras",
      azucar: "3 gramos",
  }
      recipe.mixIngredients = function(){
          console.log("mesclando los ingrediente...")
      }
  recipe.mixIngredients()

  for (var key in recipe){
      if (recipe.hasOwnProperty(key)){
        console.log("Agrega " + recipe[key] + " de " + key);

      }
  }