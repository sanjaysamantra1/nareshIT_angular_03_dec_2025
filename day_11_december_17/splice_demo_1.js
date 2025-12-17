let arr = [10, 20, 30, 40, 50];

delete arr[1];
delete arr[2];
console.log('After 2 Delete', arr);

// splice(position, deleteCount, ...items to insert)
arr.splice(1, 2, 20, 30); // [10, undefined,undefined, 40, 50]  // both delete & add
console.log('after 20,30 are added back', arr)

// [10, 20, 30, 40, 50];
arr.splice(2, 0, 25, 28); // only add, no delete
console.log(arr)


let numArr = [10,20,30,40,50,60,70];
numArr.splice(2 , 3); // only delete
console.log(numArr); 


