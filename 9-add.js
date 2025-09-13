const arg1 = process.argv[2];
const arg2 = process.argv[3];

let num1 = parseInt(arg1);
let num2 = parseInt(arg2);

const add = (a, b) => a + b;

if (isNaN(num1) || isNaN(num2)) {
    console.log("NaN");
} else {
    console.log(add(num1, num2));
}
