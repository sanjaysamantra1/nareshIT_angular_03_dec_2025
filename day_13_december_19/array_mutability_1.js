const a = 10;
// a = 15; // no


const arr = [10, 20];
arr.push(30);  // push allowed - yes
delete arr[1]; // delete allowed - yes
arr[0] = 15;   // update allowed - yes
console.log(arr);
// arr = [100,200,300]; // assign a new array ( Assignment to constant variable.)

let cars = ['Tata','Honda'];
Object.freeze(cars); 
// cars[1] = 'tata-2'; // update allowed - no
// delete cars[1];     // delete allowed - no
// cars.push('Maruti') // add allowed - no
console.log(cars)