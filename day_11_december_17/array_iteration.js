let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai'];

// 1. loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('========================')

// 2. for-in ES_6 2015
for (i in cars) { // i = 0/1/2/3/4
    console.log(cars[i]);
}
console.log('========================')

// 3. for-of ES_6
for (car of cars) {   // car = Tata/Honda ..
    console.log(car)
}
console.log('========================')

// 4. forEach()
console.log('ForEach:::')
cars.forEach((val, ind, arr) => {
    console.log(val, ind, arr)
});
// forEach() is HigherOrder , ()=>  is callback