function gerar() {
  const n = Number(document.getElementById("numero").value);
  let texto = "";

  for (let i = 1; i <= 10; i++) {
    texto += `${n} x ${i} = ${n * i}<br>`;
  }

  document.getElementById("resultado").innerHTML = texto;
}
