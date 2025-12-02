function gerar() {
  const n = Number(document.getElementById("numero").value);
  let texto = "";

  for (let i = 0; i <= 10; i++) {
    texto += `${n} + ${i} = ${n + i}<br>`;
  }

  document.getElementById("resultado").innerHTML = texto;
}
