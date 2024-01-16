// Write your solution here!
// index.js

// Define the cats array
const cats = ["Milo", "Otis", "Garfield"];

// Array functions

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Use spread operator to create a new array without modifying the original cats array
  return [...cats, name];
}

function prependCat(name) {
  
  return [name, ...cats];
}

function removeLastCat() {
  
  return cats.slice(0, -1);
}

function removeFirstCat() {
  
  return cats.slice(1);
}


