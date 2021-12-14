// Business Logic 

//get pizza cost 

const pizza = {
    size: ["small", "medium", "large"],
    toppings: ["mushrooms", "sausage", "onions", "peppers"]
}

//let pizza cost = {


//}

function setToppings(toppings, toppingsPrice=0.5){
    const cost = toppings.length*toppingsPrice
    return cost;
    //console.log(toppings.length*toppingPrice);

}


function setSize(size, sizePrice=2.0){
    let cost;

    switch (size) { 
        case "small":
            cost= 2.0 
            break;
        case "medium": 
            cost= 5.0
            break; 
        case "large":
            cost= 9.0 
            break; 
        default:
            throw new Error("size not found")
            break;
    }
    return cost; 
}

const toppingsPrice = setToppings(["mushrooms", "onions", "peppers"])
const sizesPrice = setSize("small");
$("#pizzaprice").text(`total ${toppingsPrice+sizesPrice}`);