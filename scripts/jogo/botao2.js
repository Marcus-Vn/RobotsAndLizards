class BotaoNormal {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botaoN = createButton(this.texto);
    this.botaoN.mousePressed(() => this._alteraCena());
    this.botaoN.addClass("botao-tela-inicial");

  }

  draw() {
    this.botaoN.position(this.x, this.y);

  }

  _alteraCena() {

    audio.audio.remove();
    this.botaoN.remove();
    botaoHard.botaoH.remove();
    if (CenaAtual == "abertura") {

      podepausar = true;
      CenaAtual = "jogo";
      
    }
  }


}