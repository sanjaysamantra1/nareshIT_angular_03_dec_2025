'use strict'

var a = 10;
let b = 20;
const c = 30;
console.log(`a:${a}  b:${b}  c:${c}`);

var a = 100; // a is re-declared
console.log(`a:${a}  b:${b}  c:${c}`);

// let b = 200; // re-declaration is not allowed