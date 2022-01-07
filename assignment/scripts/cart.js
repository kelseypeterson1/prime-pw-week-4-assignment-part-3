console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// Adding items to basket
function addItem(item) {
  basket.push(item);
  return true;
}

// Testing the addItem function
console.log("Test - adding a pineapple using the addItem function", addItem("pineapple"));
console.log("Basket now contains:", basket[0]);

// Listing items in basket
let index = 0;
function listItems() {
  while (index<basket.length) {
    console.log(basket[index]);
    index++;
  }
}

console.log("Test - Listing items in basket:");
listItems();
