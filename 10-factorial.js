const arg = process.argv[2];
let num = parseInt(arg);

function factorial(value) {
    if (isNaN(value) || value <= 1) {
        return 1;
    }

    return value * factorial(value - 1);
}

console.log(factorial(num));
