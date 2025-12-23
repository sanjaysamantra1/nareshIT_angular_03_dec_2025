const obj1 = { a: 10, b: 20 };
obj1.a = 15;   // update the value - Yes
delete obj1.b; // delete property - Yes
obj1.c = 30;   // add a new property - yes
console.log(obj1); // { a: 15, c: 30 }


let obj2 = { a: 100, b: 200 };
Object.preventExtensions(obj2);
obj2.a = 150;   // update the value - Yes
delete obj2.b; // delete property - Yes
obj2.c = 300;   // add a new property - No
console.log(obj2); // { a: 150 }

console.log('Obj1 is isExtensible? ', Object.isExtensible(obj1)); // false
console.log('Obj2 is isExtensible? ', Object.isExtensible(obj2)); // true