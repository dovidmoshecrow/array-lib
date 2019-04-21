# array-lib

A library for array functions in Array.prototype

## Installation
```sh
npm install array-lib
```

## Usage 

```js
 const arrayLib = require("array-lib");
 ```
 **deep copy an array:**
 ```js
 let arr = [1,2,3];
 let clone_arr = arr.clone();
```
 **Print an array:**
 ```js
 arr.print()//=> [1,2,3]
```
 **Retrun max value from array**<br /> 
  ignores elements that are not a number:
 ```js
 console.log(arr.max());
 ```

 **Returns index of max value in array:**
 ```js
 console.log(arr.max_index());
```
**Removes element at specified position:**
```js
arr.remove(0);

arr.print()//=> [2,3]
```

**Removes first or all values from array**
```js
let a = [1,2,3,4,4,5,5];
let remove_all_elements = true;
a.remove_val(4,remove_all_elements);

a.print();//=> [1,2,3,5,5];
```

**Count how much time a element is in a array**
```js
let b = ["a","b","b","c","b"];
console.log(b.count("b"));//=> 3
```
**Replace elements in array**
```js
let c = [1,2,3,3,3,4,6,6,9];
c.replace(3,"d");

c.print();//=>[1,2,"d","d","d",4,6,6,9]
```
**Add up all numbers in array:**
```js
let d = [1,2,3,4,5];

console.log(d.add_up());//=> 15
```
**Create 2d array:**
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
```js
let arr = Array.vector(6,"fill");
arr.print();//=> ['fill', 'fill', 'fill','fill', 'fill', 'fill']
```

**create an array from string:**<br />
it deletes white spaces
```js
"hello ,world ,how ,are ,you".toArray().print();//=>
 //[ 'hello', 'world', 'how', 'are', 'you' ]
```
**Multiply 2 matrices**
 
```js 
multiplyMatrices([[1,2],[3,4]],[[1,4],[6,7]]).print();
//=>[ [ 13, 18 ], [ 27, 40 ] ]
```
Or by Array prototype
```js
let b = [[1,2],[3,4]]
b.multiplyMatrices([[1,4],[6,7]]).print()
//=>[ [ 13, 18 ], [ 27, 40 ] ]
```
