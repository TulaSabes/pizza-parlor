// Business Logic 
function Pizza(toppings, cheese, sauce, size) {
    this.toppings = toppings;
    this.cheese = cheese;
    this.sauce = sauce;
    this.size = size;
    cost = this.pizzaOrder();
}

Pizza.prototype.pizzaOrder = function() {
    this.cost = 0.00;
    let numberOfToppings = 0;
    let toppingsCost = 0.00;
    if (this.size === "small") {
        this.cost += 5.00;
    }
    else if (this.size === "medium") {
        this.cost += 10.00;
      }
    else if (this.size === "large") {
        this.cost += 15.00;
      }
    else {
        this.cost +=0.00;
      }
    
    numberOfToppings += parseInt(this.toppings.length);
    toppingsCost += numberOfToppings * 2.00 ;
    this.cost += toppingsCost;
    return this.cost;
    }
    
//User Interface Logic
function displayPizzaToppings(pizza) {
    let newToppingsList = pizza.toppings[0];
    
    for (let i = 1; i<pizza.toppings.length; i++) {
        newToppingsList += " + " + pizza.toppings[i];
    }
    return newToppingsList;
}
    
$(document).ready(function() {
    $(".btn-start-order").click(function(event) {
        event.preventDefault();
        $(".pizza").show();
        $("#start-order").hide();
      })
    })
    
$(document).ready(function() {
    $("form#pizza-form").submit(function(event) {
        event.preventDefault();
        let size = $("select#pizza-size").val();
        let cheese = $("select#cheese").val();
        let sauce = $("select#sauce").val();
        let toppings = $("select#toppings").val();
    
        let myPizza = new Pizza(toppings, cheese, sauce, size);
        let myPizzaToppings = displayPizzaToppings(myPizza);
        $(".pizza-cost").html(myPizza.cost);
        $(".pizza-size").html(myPizza.size);
        $(".pizza-toppings").html(myPizzaToppings);
        $(".pizza-cheese").html(myPizza.cheese);
        $(".pizza-sauce").html(myPizza.sauce);
        $(".pizza").hide();
        $(".order").show();
    })
})