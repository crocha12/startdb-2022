class Forca {

  constructor(palavraForca) {
    this.palavraForca = palavraForca;
    this.vidas = 6;
    this.letrasChutadas = [];
    this.palavra = []
    for(let i = 0; i < palavraForca.length; i++) {
      this.palavra.push("_")
    }
  }

  checarPalavra() {
    return !this.palavra.includes("_");
  }

  adicionarLetraEmPalavra(letra) {
    for (let i in this.palavraForca) {
      if (this.palavraForca[i] === letra) {
        this.palavra[i] = letra;
      }
    }
  }

  chutar(letra) { 
    if (letra.length === 1) {
      if (!this.letrasChutadas.includes(letra)) {
        if (this.palavraForca.includes(letra)) {
          this.adicionarLetraEmPalavra(letra)
        } else {
          this.vidas = this.vidas - 1
        }
        this.letrasChutadas.push(letra)
      }
    }
  }

  buscarEstado() { 
    if (this.vidas == 0) {
      return "perdeu"
    } else if (this.checarPalavra()) {
      return "ganhou"
    }
    return "aguardando chute";
   } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
