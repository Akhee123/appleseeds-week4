
function fibonacci(n) {
    let result;
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test
console.log(fibonacci(7));