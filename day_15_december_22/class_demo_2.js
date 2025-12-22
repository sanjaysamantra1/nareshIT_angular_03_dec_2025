// ES_6
class Trainer {
    constructor(id, name, course, time) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.time = time;
    }
}

let trainer1 = new Trainer(101, 'Sanjay', 'Angular', '7.30AM'); // Object
console.log(trainer1)