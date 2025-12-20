function test(a, b, ...c) {
    console.log(a, b, c);
}
test(10, 20); // a = 10 b=20 c=[]
test(10, 20, 30, 40, 50); // a=10 b=30 c=[30,40,50]

// SyntaxError: Rest parameter must be last formal parameter