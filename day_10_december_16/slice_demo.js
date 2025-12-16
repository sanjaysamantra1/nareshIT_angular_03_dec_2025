let str = 'This is Javascript Class';

console.log(str.slice(4)); // start from index 4, go till the end
console.log(str.substring(4)); // start from index 4, go till the end

console.log(str.slice(8,18));
console.log(str.substring(8,18)); 

console.log(str.slice(8,-2)); // slice() works with -ve index
console.log(str.substring(8,-2));  // substring() doesnt work with -ve index

console.log(str.substring(5,7)); // start from 5, go till 7
console.log(str.substr(5,7)); // start from 5 index, print next 7 characters