class GameOver {
  constructor() {
    this.cont = 0;

  }

  ApareceReiniciar() {

    botaoReplay = new Botao("Reiniciar", width / 2, height / 2);
    this.cont++;

  }

  Draw() {
    this._imagemDeFundoOver();
    this._botao();
    textAlign(RIGHT);
    fill("#0f0045");
    textFont(myFont2);
    textSize(30);
    text("Pontos :", width - 120, 50);
    text(parseInt(pontuacao.pontos), width - 30, 50);
    TrilhaSonora.pan(0.9);
  }

  _imagemDeFundoOver() {
    image(ImagemBlur, width / 20 - 100, height / 20 - 100);
    image(ImagemGameOver, (width / 2) - 250, (height / 2) - 200, 500, 400);
  }

  _botao() {
    botaoReplay.x = width / 2 - 140
    botaoReplay.y = height - 120;
    botaoReplay.draw();

  }


}