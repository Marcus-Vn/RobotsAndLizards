class BotaoHard {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botaoH = createButton(this.texto);
    this.botaoH.mousePressed(() => this._alteraCena());
    this.botaoH.addClass("botao-tela-inicial");

  }

  draw() {
    this.botaoH.position(this.x, this.y);

  }

  _alteraCena() {

    audio.audio.remove();
    this.botaoH.remove();
    botaoNormal.botaoN.remove();
    if (CenaAtual == "abertura") {

      podepausar = true;
      CenaAtual = "jogoHard";
       
    }
  }


}