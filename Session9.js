let countries = async () => {
  let contries = await fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  //console.log(contries);
  // console.log(
  //   "Get all the countries from Asia continent /region using Filter function"
  // );

  let asiacontries = contries.filter((x) => x.region === "Asia");
  // console.log(asiacontries);
  document.getElementById("AsiaCountries").innerHTML = asiacontries.map(
    (x) => x.name + "<br/>"
  );

  let less2Lcountries = contries.filter((x) => x.population <= 200000);
  // console.log(asiacontries);
  document.getElementById("lessthan2L").innerHTML = less2Lcountries.map(
    (x) => x.name + " - " + x.population + "<br/>"
  );

  let data = [];
  contries.map((x) =>
    data.push(x.name + "-" + x.capital + "-" + x.flag + "<br />")
  );
  document.getElementById("all").innerHTML = data;

  console.log("Print the total population of countries using reduce function");
  console.log(contries.reduce((prev, cur) => prev + cur.population, 0));
};
countries();
