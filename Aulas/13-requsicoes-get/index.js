function createCountryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country"); // adicionando meu estilo a este elemento

  const countryName = country.name.common;
  const name = document.createElement("h2");
  name.textContent = countryName;

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  card.append(name, flag);
  document.querySelector("#countries").append(card);
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json(); // convertendo o valor para json
  console.log(countries);

  countries.forEach(createCountryCard); // para cada pais dentro de countries, criar um elemento, basicamente chama a função createCountryCard() para cada elemento.
}

getCountries();
