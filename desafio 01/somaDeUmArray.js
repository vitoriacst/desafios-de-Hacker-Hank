// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'simpleArraySum' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY ar as parameter.
//  */

// function simpleArraySum(ar) {
//     if(ar.length!== 0){
//         return ar.map
//     }

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arCount = parseInt(readLine().trim(), 10);

//     const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

//     const result = simpleArraySum(ar);

//     ws.write(result + '\n');

//     ws.end();
// }


function soma() {
    let soma = 0;
    const array = [0, 1, 2, 3];
    for (let index = 0; index < array.length; index++) {
      soma = soma + array[index];
      console.log(soma);
    }
    return soma;
  }
  soma();
  console.log(soma(1, 2, 3));
  