function contar() {
  let texto = document.getElementById("texto");
  console.log(texto.value);

  let chart = texto.value.length; 
  document.getElementById("chart").innerText = chart;
}
