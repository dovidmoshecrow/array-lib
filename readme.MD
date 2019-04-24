# array-lib

A library for array functions in Array.prototype

[Github](https://github.com/dovidmoshecrow/array-lib)

## Installation
```sh
npm install array-lib
```

## Usage 
****
```js
 const arrayLib = require("array-lib");
 ```
 **clone**<br>
 deep copy an array
 ****
 ```js
 let arr = [1,2,3];
 let clone_arr = arr.clone();
```
 **print**<br>
 ****
 ```js
 arr.print();//=> [1,2,3]
 "hello".print();// =>hello
 (123).print();//=>123
 {a:12}.print();//=>{a:12}

```
 **max**<br /> 
  Retrun max value from array
  ****
 ```js
 arr.max().print();
 ```
 **maxIndex**<br>
 Returns index of max value in array:
 ****
 ```js
 arr.maxIndex().print()
```
**remove**<br>
Removes element at the specified position
****
```js
arr.remove(0);

arr.print()//=> [2,3]
```
**removeVal**<br>
Removes first or all values from array
****
```js
let a = [1,2,3,4,4,5,5];
let remove_all_elements = true;
a.removeVal(4,remove_all_elements);

a.print();//=> [1,2,3,5,5];
```
**count**<br>
Count how much times a element is in an array
****
```js
let b = ["a","b","b","c","b"];
console.log(b.count("b"));//=> 3
```
**replace**<br>
Replace elements in array
****
```js
let c = [1,2,3,3,3,4,6,6,9];
c.replace(3,"d");

c.print();//=>[1,2,"d","d","d",4,6,6,9]
```
**addUp**<br>
Add up all numbers in array
****
```js
let d = [1,2,3,4,5];

d.addUp().print();//=> 15
```
**matrix**<br>
Create a 2d array
****
```js
let arr = Array.matrix(2,3,"fill")
arr.print();
//=>
//[ 
//    [ 'fill', 'fill', 'fill' ],
//    [ 'fill', 'fill', 'fill' ]
// ]
```
**vector**<br>
Create an array
****
```js
let arr = Array.vector(6,"fill");
arr.print();//=> ['fill', 'fill', 'fill','fill', 'fill', 'fill']
```
**toArray**<br>
Create an array from a string
****
```js
"hello ,world ,how ,are ,you".toArray().print();//=>
 //[ 'hello', 'world', 'how', 'are', 'you' ]
```
**multiplyMatrices**<br>

 ****
```js
let b = [[1,2],[3,4]]
b.multiplyMatrices([[1,4],[6,7]]).print()
//=>[ [ 13, 18 ], [ 27, 40 ] ]
```
**isMatrix**<br>
check if an array is a 2d matrix
****
```js
 let matrix = [
     [0,1,2],
     [3,4,5],
     [6,7,8]
 ];

 matrix.isMatrix().print()// => true
```
**avrage**<br>
get Avrage from array
****
```js
    [1,2,3,4,5].avrage().print();//=> 3
```
**pos**<br>
return first position of element in an array
****
```js
  [1,2,3,4,5].pos(4).print();//=>3
  [1,2,3,4,5].pos(9).print();//=>false
```
**getAllPos**<br>
Get all positions of element in array
****
```js
let arr = [1,3,4,4,8,7,5,3,4];
b.getAllPos(4).print();//=> [2,3,8]
```
**shuffle**<br>
shuffle an array
****
```js
  [1,2,3,4,5,6,7,8,9].shuffle().print();
  //=> [ 7, 2, 9, 1, 6, 8, 3, 5, 4 ]
```
**range**<br>
A function to create flexibly-numbered lists of integers
****
```js
Array.range(10);
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Array.range(1, 11);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array.range(0, 30, 5);
//=> [0, 5, 10, 15, 20, 25]
Array.range(0, -10, -1);
//=> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
Array.range(0);
//=> []
```
**without**<br>
Returns a copy of the array with all instances of the values removed.
```js
let a = [1,2,3,1,2,31,2,31,1,2,3,]
let b = a.without(1,2);
b.print();
  //=>[ 3, 31, 31, 3 ]
```
