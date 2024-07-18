// function ansycSum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject('Arguments must be of type number')
//         } else {
//             resolve(a + b)
//         }
//     })
// }

// function ansycSubtract(a,b) {
//     return new Promise((resolve, reject) => {
//         if(typeof a !== 'number' || typeof b !== 'number') {
//             reject('Arguments must be of type number')
//         } else {
//             resolve(a - b)
//         }
//     })
// }

// const sumResult = ansycSum(50, 33)
// const subtractResult = ansycSubtract(50, 33)

// Promise.all([sumResult, subtractResult]).then(results => {
//     console.log(results)
// }).catch(err => {
//     console.log(err)
// })

const numbers = [4, 9, 5, 13, 77];

function asyncSquare(x) {
  return new Promise((resolve, reject) => {
    resolve(x * x);
  });
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
});
