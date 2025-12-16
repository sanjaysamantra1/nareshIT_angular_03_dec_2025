let str = 'This is javascript class, This is String class';

let res1 = str.replace('class','session');
console.log(res1);

let res2 = str.replaceAll('class','session');
console.log(res2);

let res3 = str.replace(/class/g,'session'); // replaceAll
console.log(res3)