let user = { name: 'sachin', 'last name': 'tendulkar', age: 35, address: 'mumbai' };
// object literal

console.log('user name ', user.name);
console.log('user age ', user['age']);

// console.log(user.last name); // No
console.log(user['last name']); // Yes

let a = 'address';
console.log(user.a);   // undefined
console.log(user[a]);  // mumbai

for (key in user) {
    console.log(key + " ========== " + user[key]);
}

let allKeys = Object.keys(user);
console.log(allKeys , allKeys.length)