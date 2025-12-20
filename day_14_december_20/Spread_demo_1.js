// REST : ... as function parameter 
// Spread : spread/break/split an object/array to individual values

let arr1 = [10, 20, 30];
let arr2 = [...arr1];  // spread

console.log(Math.max(10, 20, 30)); // 30
console.log(Math.max(arr1)); // NaN
console.log(Math.max(...arr1)); // 30
