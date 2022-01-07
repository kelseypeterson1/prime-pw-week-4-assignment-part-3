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
console.log("Basket is empty:", basket);
console.log("Test - adding a pineapple using the addItem function (expect true)", addItem("pineapple"));
console.log("Adding an orange", addItem("orange"));
console.log("Adding a banana", addItem("banana"));
console.log("Basket now contains:", basket);

// Listing items in basket
let index = 0;
function listItems() {
  if (basket.length === 0) {
    console.log("nothing");
  } else {
    while (index<basket.length) {
    console.log(basket[index]);
    index++;
    }
  }
}

// Testing the listItems function
console.log("Test - Listing items in basket using the listItems function:");
listItems();

// Emptying the basket
function empty() {
  basket = [];
  return true;
}

// Testing the empty function
console.log("Test - emptying the basket (expect true):", empty());
console.log("Basket now contains:");
listItems();
