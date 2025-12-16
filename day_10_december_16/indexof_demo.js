let str = 'entertainment';

console.log(str.indexOf('e')); // 0
console.log(str.indexOf('e',1)); // 3
console.log(str.lastIndexOf('e')); // 10

console.log(str.includes('men')) // true
console.log(str.includes('man')) // false

console.log(str.startsWith('ent')) // true
console.log(str.startsWith('end')) // false

// print the non-repeated char
for(char of str){
    if(str.indexOf(char) === str.lastIndexOf(char)){
        console.log(char);
        break;
    }
}