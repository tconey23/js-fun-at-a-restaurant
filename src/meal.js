function nameMenuItem(name) {

 var menuItemName = `Delicious ${name}`
 return menuItemName

}

function createMenuItem(name, price, type){

var menuItem = {

name: name,
price: price,
type: type

}

return menuItem


}

function addIngredients(item, array){

if (array.includes(item)){



}else{
  array.push(item)
  return array
}

}

function formatPrice(initialPrice){

  var initialPrice = "$" + initialPrice

return initialPrice

}

function decreasePrice(price){

var price = price - (price * .10)

return price 

}

function createRecipe(title,ingredients,type){

  var recipe = {

    title: title,
    ingredients: ingredients,
    type: type

  }
  
  return recipe

}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
