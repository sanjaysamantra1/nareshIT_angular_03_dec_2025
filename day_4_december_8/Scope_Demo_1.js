var a = 10;      // global
let b = 20;      // global
const c = 30;    // global


function f1() {
    var d = 40; // function
    e = 50;  // global
    console.log('f1 starts here...')
    console.log(`a::${a}`);
    console.log(`b::${b}`);
    console.log(`c::${c}`);
    console.log(`d::${d}`);
    console.log(`e::${e}`);
    console.log('f1 ends here...')
}
function f2() {
    console.log('f2 starts here...')
    console.log(`a::${a}`);
    console.log(`b::${b}`);
    console.log(`c::${c}`);
    // console.log(`d::${d}`); // d is not defined
    console.log(`e::${e}`);
    console.log('f2 ends here...')
}
f1();
f2();