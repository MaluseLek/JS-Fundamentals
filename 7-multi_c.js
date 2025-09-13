const arg = process.argv[2];
const intValue = parseInt(arg);
let i = 0;

if (isNaN(intValue)) {
    console.log("Missing number of occurrences");
} else {

    while (i < intValue) {
        console.log("C is fun");
        i++;
    }
}