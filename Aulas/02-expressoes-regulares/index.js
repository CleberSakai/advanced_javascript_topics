function PhoneNumber(phoneNumberString) {
  // removendo todos os espaços em branco e letras, substituindo por "" = vazio
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]; // recendo apenas digitos de 1 a 3 +55
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]; // pegando numeros que fiquem dentro de parenteses (ddd) por exemplo.
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, ""); // pegando numeros que fiquem depois dos () especificamente o ), removendo tambem todos os -
}

console.log(new PhoneNumber("+55 (22) 9 9876-5432"));
console.log(new PhoneNumber("+1 (555) a555-999-8888"));
