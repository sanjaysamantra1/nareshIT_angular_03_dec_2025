// write an add() that should be able to add n # of args

function add(...arr) {
    let sum = 0;
    for (ele of arr) {
        sum = sum + ele;
    }
    console.log(`sum is ${sum}`)
}

add(10, 20)
add(10, 20, 30)
add(10, 20, 30, 40)
add(10, 20, 30, 40, 50)