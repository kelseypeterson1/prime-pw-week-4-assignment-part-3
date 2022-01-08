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
  index = 0;
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

// Stretch goals:
const maxItems = 5;

// Determining if the basket has more items than the max
function isFull () {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

// Testing the isFull function
console.log("Test - Checking if the basket is full using the isFull function (expect false):", isFull());

// Updating the addItems function so it won't add items if the basket is full
addItem = function updatedAddItem(item) {
  if (basket.length < maxItems) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}

//Testing the updated addItem function
console.log("Adding an apricot to the basket", addItem("apricot"));
console.log("Adding a tangerine", addItem("tangerine"));
console.log("Adding a grapefruit", addItem("grapefruit"));
console.log("Adding an apple", addItem("apple"));
console.log("Adding a peach", addItem("peach"));
console.log("Checking if basekt is full:", isFull());
console.log("Test - Adding a coconut (expect false)", addItem("coconut"));
