async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be of type number");
  }

  return a + b;
}

async function execute() {
  try {
    const sumResult = await asyncSum(50, null);
    console.log(sumResult);
  } catch (err) {
    console.log(err);
  }
}

execute();

// podemos tratar as rejeições dentro de um bloco try cath convencional.
