//Find the last element of the following
//arrays1 =[3,7,34,90,12]
//arrays =[true,"green","where",12,56] 
let arr1 = [3,7,34,90,12];
let last_element = arr1[arr1.length - 1];
console.log(last_element)

//two
let arr2 = [true,"green","where",12,56];
let lastElement = arr2[arr2.length - 1];
console.log(lastElement)


 //Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];

let myPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = myPets.join("")
console.log(pets);

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort();
console.log(arr3);

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
    var arr = ["apple","mango","apple","orange","mango","mango"]
    
var characters = [new Set(arr)];

console.log(characters);


//Write a JS script to search for the following word in the array.
//If the word is present, console it else console "the search word was not found"
//let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
let word= "we";
if (word == "we"){
  console.log(word)
}
else{
  console.log("the search word is not found")

}


//Write a JS script to sort the following string
//let word = "sevink

let word1 = "sevink";
console.log(word1.split("").sort());

