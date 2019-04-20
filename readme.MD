# array-lib

A library for array functions in Array.prototype

## Installation
```sh
npm install array-lib
```

## Usage 

```javascript
 const arrayLib = require("array-lib");
 //deep copy a array:
 let arr = [1,2,3];
 let clone_arr = arr.clone();

 // Print an array:
 arr.print()//output [1,2,3]

 //Retrun max value from array and ignores elements that are not a number:
 console.log(arr.max());

 //Returns index of max value in array:
 console.log(arr.max_index());

//Removes element at specified position:
arr.remove(0);

arr.print()//Output: [2,3]

//Removes first or all values from array:
let a = [1,2,3,4,4,5,5];
let remove_all_elements = true;
a.remove_val(4,remove_all_elements);

a.print();//Output: [1,2,3,5,5];

//Count how much time a element is in a array
let b = ["a","b","b","c","b"];
console.log(b.count("b"));//Output: 3

//Replace elements in array

let c = [1,2,3,3,3,4,6,6,9];
c.replace(3,"d");

c.print();//output:[1,2,"d","d","d",4,6,6,9]

//Add up all numbers in array:
let d = [1,2,3,4,5];

console.log(d.add_up());//output: 15

//Create 2d array:
let arr = Array.matrix(2,3,"fill")
arr.print();
//Output:
//[ 
//    [ 'fill', 'fill', 'fill' ],
//    [ 'fill', 'fill', 'fill' ]
// ]

//Create array:

let arr = Array.vector(6,"fill");
arr.print();//Output:['fill', 'fill', 'fill','fill', 'fill', 'fill']
```
