const cats = ["Milo", "Otis", "Garfield"];
const cat = "Muse"
let NewCats

// Write your solution here!
console.log(`Original cats = ${cats}.`);
console.log(`New cat = ${cat}`)

//Call function
// console.log(`Call destructivelyAppendCat function`);
// destructivelyAppendCat(cats,"Muse")

// console.log(`Call destructivelyPrependCat function`);
// destructivelyPrependCat(cats,"Muse")

// console.log(`Call destructivelyPrependCat function`);
// destructivelyRemoveLastCat(cats)

// console.log(`Call destructivelyRemoveFirstCat function`);
// destructivelyRemoveFirstCat(cats)

//After calling function destructively
// console.log(`After Calling Function destructively`)
// console.log(`cats = ${cats}.`);

// Print result
console.log(`After Calling Function unchanged array`)
NewCats = removeFirstCat(cats)
console.log(`New Cats array = ${NewCats}`)
console.log(`cats = ${cats}.`);



//This function should append a cat to the end of the array, destructively.
function destructivelyAppendCat(cats,cat) {
  cats.push(cat);
}


// // this function should prepend a cat to the beginning of the cats array, destructively.
function destructivelyPrependCat(cats,cat) {
  cats.unshift(cat);
}

// // this function should remove the last cat from the cats array, destructively.
function destructivelyRemoveLastCat(cats) {
  cats.pop();
}

// // this function should remove the first cat from the cats array, destructively.
function destructivelyRemoveFirstCat(cats) {
  cats.shift()
}

// // this function should append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(cats, cat) {
  let NewCats = cats.slice()
  NewCats.push(cat)
  return NewCats
}

// // this function should prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(cats, cat) {
  let NewCats = cats.slice()
  NewCats.unshift(cat)
  return NewCats
}

// // this function should remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat(cats) {
  const tmpArray = [...cats]
  tmpArray.pop()  
  return tmpArray
}

// // this function should remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
  const tmpArray = [...cats]
  tmpArray.shift()  
  return tmpArray
}