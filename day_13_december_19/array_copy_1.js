let arr1 = [10, 20];
let arr2 = arr1; // Reference Copy
arr1.push(30);
arr2.push(40);
console.log(arr1);  // [ 10, 20, 30, 40 ]
console.log(arr2);  // [ 10, 20, 30, 40 ]


let arr3 = [10, 20, [30, 31]];
let newArr = arr3.slice(); // shallow copy
let arr4 = [...arr3]; // copy by value : shallow copy
arr4.push(40,50); // when 40 is pused to arr4, arr3 is not impacted
arr4[2].push(32, 33);
console.log('arr3:', arr3);  // [ 10, 20,[30,31] ]
console.log('arr4:', arr4);  // [ 10, 20,[30,31],40,50 ]


let arr5 =  [10, 20, [30, 31]];
arr6 = structuredClone(arr5); // deepcopy
console.log('arr6 : ',arr6)
arr6.push(40,50); 
arr6[2].push(32, 33);
console.log('arr5:', arr5);   // [ 10, 20, [ 30, 31 ] ]
console.log('arr6:', arr6);   // [ 10, 20, [ 30, 31, 32, 33 ], 40, 50 ]