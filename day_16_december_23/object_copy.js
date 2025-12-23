let obj1 = { a: 10, b: 20 };
let obj2 = obj1;  // Reference Copy
console.log('obj1 ', obj1);

let obj3 = Object.assign({},obj1); // Shallow Copy
// let obj3 = {...obj1}; // Shallow Copy
obj3.c = 30;
console.log(obj1)
console.log(obj3)

let obj4 = structuredClone(obj1) // Deep Copy