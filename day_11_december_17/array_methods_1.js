let arr = [10, 20, 30, 40];

console.log('Before Push::', arr); // [10, 20, 30, 40]
arr.push(50,60);
console.log('After Push::', arr);
arr.pop();
arr.pop();
console.log('After 2 Pop::', arr); // [ 10, 20, 30, 40 ]
arr.unshift(50);
console.log('After unshift::', arr); // [ 50, 10, 20, 30, 40 ]
arr.shift();
console.log('After shift::', arr); // [ 10, 20, 30, 40 ]
