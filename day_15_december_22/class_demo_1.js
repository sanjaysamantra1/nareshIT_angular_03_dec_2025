function add(a,b){ // Normal Function
    console.log(a+b)
}
let obj = new add(10,20);
console.log(obj)


// ES_5
function Trainer(id, name, course, time) { // constructor / class
    this.id = id;
    this.name = name;
    this.course = course;
    this.time = time;
}

let trainer1 = new Trainer(101,'Sanjay','Angular','7.30AM'); // Object
console.log(trainer1)