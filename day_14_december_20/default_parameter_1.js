function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0; // ES_5
    console.log(a + b + c); // NaN
}
add(10, 20);

function sum(a, b, c = 0) { // c=0 default parameter value
    console.log(a + b + c);
}
sum(10, 20);
sum(10, 20, 30);

