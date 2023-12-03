function createRestaurant(restaurantName){

  var restaurantName = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }

  }

return restaurantName

}

function addMenuItem(restaurantName,menuItem){

    var menuType = menuItem.type  
    var menuName = restaurantName.menus[menuType]




if(menuName.length === 0){

  menuName.push(menuItem)

}else{

    for(var i=0; i < menuName.length; i++){

      if(menuName[i] === menuItem){
            return
      }

    }

      menuName.push(menuItem)

  }
}


function removeMenuItem(restaurantName,menuItem,menuType){

  var menuName = restaurantName.menus[menuType]
  var result = `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
  var error = `Sorry, we don't sell ${menuItem}, try adding a new recipe!`

if(menuName.length === 0){

    return error

}else{

  for(var i=0; i < menuName.length; i++){

    if(menuName[i].name === menuItem){
          
          menuName.splice(i,1)

          return result 
    }else{

        return error

    }

  }

    return

}

}

function checkForFood(restaurantName,menuItem){

  var menuType = menuItem.type  
  var menuName = restaurantName.menus[menuType]
  var retPositive = `Yes, we're serving ${menuItem.name} today!`
  var retNegative = `Sorry, we aren't serving ${menuItem.name} today.`


  if(menuName.length === 0){

    return retNegative
  
  }else{
  
      for(var i=0; i < menuName.length; i++){
  
        if(menuName[i] === menuItem){
              return retPositive
        }
  
      }
  
        return retNegative
  
    }




}



module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}