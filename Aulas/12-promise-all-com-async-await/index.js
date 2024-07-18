function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const numbers = [4, 5, 9, 13, 77];

// const squares = numbers.map(async number => {
//     await waitFor(2)
//     return number * number
// })

// console.log(squares)

// poderiamos usar o Promise.all() para esperar os resultados e exibi-los através do .then()

// Promise.all((squares)).then(results => {
//     console.log(results)
// })

// Mas se estivermos trabalhando com uma função ansyc podemos usar o await no próprio Promise.all()

async function execute() {
  const squares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(2);
      return number * number;
    })
  );

  console.log(squares);
}

execute();
