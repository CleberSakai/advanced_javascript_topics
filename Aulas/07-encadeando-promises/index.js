function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error("Age is required"));
    }
  });
}

function getAge(birtdhay) {
  return new Promise((resolve, reject) => {
    if (birtdhay) {
      const birthYear = new Date(birtdhay).getFullYear;
      const currentYear = new Date().getFullYear;
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("Birthday is required"));
    }
  });
}

// lembrando que o retorno padrão do then() também é uma promise.

getAge("2002-05-23")
  .then((age) => {
    return checkAge(age);
  })
  .then((isOver18) => {
    if (isOver18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
