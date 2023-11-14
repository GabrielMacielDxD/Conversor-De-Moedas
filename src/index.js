function converterMoeda() {
    var moedaOrigem = document.querySelector("#moeda-origem").value;
    var moedaDestino = document.querySelector("#moeda-destino").value;
    var valor = parseFloat(document.querySelector("#valor-a-converter").value);
  
    // Taxas de câmbio fixas (substitua por taxas reais conforme necessário)
    var taxas = {
      eur: { usd: 1.12, brl: 6.35, jpy: 130.0 },
      usd: { eur: 0.89, brl: 5.67, jpy: 112.5 },
      gbp: { eur: 1.18, usd: 1.33, brl: 7.01 },
      jpy: { eur: 0.0077, usd: 0.0089, brl: 0.058 },
      chf: { eur: 1.05, usd: 1.18, brl: 6.23 },
      cad: { eur: 0.67, usd: 0.75, brl: 3.96 },
      aud: { eur: 0.61, usd: 0.69, brl: 3.64 },
      cny: { eur: 0.14, usd: 0.16, brl: 0.84 },
      brl: { eur: 0.16, usd: 0.18, jpy: 17.3 }
    };
  
    if (taxas[moedaOrigem] && taxas[moedaOrigem][moedaDestino]) {
      var valorConvertido = valor * taxas[moedaOrigem][moedaDestino];
      var resultadoContainer = document.querySelector("#resultado-container");
      resultadoContainer.innerHTML = `${valor} ${moedaOrigem.toUpperCase()} = ${valorConvertido.toFixed(
        2
      )} ${moedaDestino.toUpperCase()}`;
    } else {
      alert(
        "Não foi possível obter a taxa de câmbio. Verifique as moedas selecionadas."
      );
    }
}



