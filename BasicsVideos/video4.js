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

// for(let i = 0; i < n; i++) {
//     for(let j =1; j<=n; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// for(let i = 1; i<=n; i++) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write(`${j} `)
//     }
//     console.log();
// }

// for(let i = 1; i<=n; i++) {
//     let ascii = 65;
//     for(let j=1; j<=i; j++) {
//         process.stdout.write(String.fromCharCode(ascii)+ " ")
//         ascii++
//     }
//     console.log();
// }

// for(let i=n; i>=1; i--) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=n-i; j++) {
//         process.stdout.write("  ");
//     }

//     for(let j=1; j<=i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }