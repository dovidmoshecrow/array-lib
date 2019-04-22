# array-lib

A library for array functions in Array.prototype

## Installation
```sh
npm install array-lib
```

## Usage 
****
```js
 const arrayLib = require("array-lib");
 ```
 **deep copy an array:**
 ****
 ```js
 let arr = [1,2,3];
 let clone_arr = arr.clone();
```
 **Print an array:**<br>
  also supports boolian number and string
 ****
 ```js
 arr.print()//=> [1,2,3]
 "hello".print();// =>hello
```
 **Retrun max value from array**<br /> 
  ignores elements that are not a number:
  ****
 ```js
 arr.max().print();
 ```

 **Returns index of max value in array:**
 ****
 ```js
 arr.max_index().print()
```
**Removes element at the specified position:**
****
```js
arr.remove(0);

arr.print()//=> [2,3]
```

**Removes first or all values from array**
****
```js
let a = [1,2,3,4,4,5,5];
let remove_all_elements = true;
a.remove_val(4,remove_all_elements);

a.print();//=> [1,2,3,5,5];
```

**Count how much times a element is in an array**
****
```js
let b = ["a","b","b","c","b"];
console.log(b.count("b"));//=> 3
```
**Replace elements in array**
****
```js
let c = [1,2,3,3,3,4,6,6,9];
c.replace(3,"d");

c.print();//=>[1,2,"d","d","d",4,6,6,9]
```
**Add up all numbers in array:**
****
```js
let d = [1,2,3,4,5];

d.add_up().print();//=> 15
```
**Create 2d array:**
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

**Create array:**
****
```js
let arr = Array.vector(6,"fill");
arr.print();//=> ['fill', 'fill', 'fill','fill', 'fill', 'fill']
```

**Create an array from a string:**<br />
****
```js
"hello ,world ,how ,are ,you".toArray().print();//=>
 //[ 'hello', 'world', 'how', 'are', 'you' ]
```
**Multiply 2 matrices**
 ****
```js 
arrayLib.multiplyMatrices([[1,2],[3,4]],[[1,4],[6,7]]).print();
//=>[ [ 13, 18 ], [ 27, 40 ] ]
```
Or by Array prototype
```js
let b = [[1,2],[3,4]]
b.multiplyMatrices([[1,4],[6,7]]).print()
//=>[ [ 13, 18 ], [ 27, 40 ] ]
```
**check if an array is a 2d matrix**
****
```js
 let matrix = [
     [0,1,2],
     [3,4,5],
     [6,7,8]
 ];

 matrix.isMatrix().print()// => true
```

**get Avrage from array**
****
```js
    [1,2,3,4,5].avrage().print();//=> 3
```
**return position of element in an array**
****
```js
  [1,2,3,4,5].pos(4).print();//=>3
  [1,2,3,4,5].pos(9).print();//=>false
```
**Get all positions of element in array**
****
```js
let arr = [1,3,4,4,8,7,5,3,4];
b.getAllPos(4).print();//=> [2,3,8]
```
## Chaining
****
```js
  let a = [1,2,3,4,5,5,5,6,7];

  a.remove_val(5,true).sort_by("value").print(); 
  //=>[ 1, 2, 3, 4, 6, 7 ]
```
