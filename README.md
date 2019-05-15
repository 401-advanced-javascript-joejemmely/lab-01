# LAB - 01

## Node Ecosystem

### Author: Joé Jemmely

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-joejemmely/lab-01/pull/1)
- [travis](https://travis-ci.com/401-advanced-javascript-joejemmely/lab-01)

### Modules

#### `arithmetic.js`

##### Exported Values and Methods

###### `add(array) -> int`

`add([1,2,3,4]) // return 10`

###### `subtract(array) -> int`

`subtract([1,2,3,4]) // return -8`

###### `multiply(array) -> int`

`multiply([1,2,3,4]) // return 24`

###### `divide(a:int,b:int) -> int`

`divide([9,3]) // return 3`

#### `greet.js`

##### Exported Values and Methods

###### `greet(string) -> string`

`greet('joe') // return 'hello joe'`

#### Tests

##### arithmetic.test.js

- add() returns the sum of all the elements in the array
- subtract() returns the difference of all the elements in the array
- multipliy() returns the product of all the elements in the array
- divide() returns the quotient of the dividend (args[0]) divided by the divisor (args[1])

##### greet.test.js

- Random string input return the correct result
- Returns null if no string are provided
- Return 'hello world' when args[0] is 'world'
