const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++){
        let row = "";
        for (let x = 0; x < size; x++){
            row += "X";
        }
        console.log(row);
    }
}