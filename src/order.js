function takeOrder(orderNumber,deliveryOrders){

  deliveryOrders.push(orderNumber)
  
  if(deliveryOrders.length > 3){

    deliveryOrders.splice(3,1)

    return deliveryOrders

  }else{

    return deliveryOrders
}

}

function refundOrder(refOrder,deliveryOrders){

  for (var i =0; i < deliveryOrders.length; i++){
  
    if(deliveryOrders[i].orderNumber === refOrder){

      deliveryOrders.splice(i,1)

    }
  }
}

function listItems(deliveryOrders){

  var outputList = ''
  for(var i = 0; i < deliveryOrders.length; i++){

    outputList = (`${outputList} ${String(deliveryOrders[i].item)},`)


  }
  
  return outputList.replace(/,(\s+)?$/, '').trim()
}

function searchOrder(deliveryOrders,searchTerm){
  
  var testResult = null

  for(var i = 0; i < deliveryOrders.length; i++){

    if (deliveryOrders[i].item === searchTerm){
      return true
      
    }else{
      testResult = false

    }

  }

  return testResult

}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}