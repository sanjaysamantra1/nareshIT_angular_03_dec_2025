let originalArr = [10, 20, 30, 40, 50];

/* originalArr.splice(1, 2, 25, 35); // changes original array
console.log(originalArr); // [10,25,35,40,50] */

let newArr = originalArr.toSpliced(1, 2, 25, 35);
console.log(originalArr)
console.log(newArr)




