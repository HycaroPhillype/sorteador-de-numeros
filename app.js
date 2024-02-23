function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;
  if (ate < de) {
    alert("Número final menor que o começo!! Por favor tente novamente...");
    reiniciar();
  } else {
    for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleantorio(de, ate);

      // esse outro lup "while", é para não deixar numeros repetidos no array "sorteados".
      // importanta observar com cuidado onde fazer, antes ou depois de quem!!
      while (sorteados.includes(numero)) {
        numero = obterNumeroAleantorio(de, ate);
      }

      sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotao();
  }
}

function obterNumeroAleantorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById("btm-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container_botao");
  } else {
    botao.classList.remove("container_botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}
