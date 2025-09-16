// process.stdout.write("hello ")
// process.stdout.write("world")

let prompt = require('prompt-sync')()

let n = parseInt(prompt("Enter a num:- "));

// for(let i = 0; i < n; i++) {
//     process.stdout.write("*")
// }
// console.log();
// for(let i = 0; i < n; i++) {
//     process.stdout.write("*")
// }
// console.log();
// for(let i = 0; i < n; i++) {
//     process.stdout.write("*")
// }
// console.log();

for(let i = 0; i < n; i++) {
    for(let j =1; j<=n; j++) {
        process.stdout.write("* ")
    }
    console.log();
}
