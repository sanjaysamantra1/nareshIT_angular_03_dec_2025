var a = 10; // global

function f1() {
    var b = 20; // function
    console.log(`in function scope, a:: ${a}`)
    console.log(`in function scope, b:: ${b}`)

    if (true) {
        var c = 30; // even though its declared inside a block, its scope is not block scoped
        console.log(`inside block:: ${c}`);
    }
    console.log(`outside block:: ${c}`);
}
f1();
console.log(`in global scope, a:: ${a}`)
// console.log(`in global scope, b:: ${b}`)