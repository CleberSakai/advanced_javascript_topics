console.log("programa iniciado!");

const timeoutId = setTimeout(() => {
  console.log("3 segundos se passaram desde que o programa foi iniciado");
}, 3 * 1000);

// // clearTimeout(timeoutId)

let seconds = 0;

const intevalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos`);

  if (seconds > 10) {
    clearInterval(intevalId);
    console.log("Tempo escotado, ecerrando...");
  }
}, 3 * 1000);
