class Abertura {
  constructor() {
    this.cont = 0;
    this.cont2 = 0;
    this.cenario2 = cenario2 = new Cenario(ImagemCenario2, 0.5);
    this.cenario1 = cenario = new Cenario(ImagemCenario, 1);

  }
  ApareceBotao() {
    botaoNormal = new BotaoNormal("Normal", width / 2, height / 2);
    botaoHard = new BotaoHard("Difícil", width / 2, height / 2);

  }

  Draw() {
    this._botaoN();
    this._botaoH();
    this.cenario2.exibe();
    this.cenario2.move();
    this.cenario1.exibe();
    this.cenario1.move();
    this._imagemDeFundo();
  }

  _imagemDeFundo() {

    image(ImagemBlur, 0, 0, width, height);
  }

  _botaoN() {

    botaoNormal.x = width - 430;
    botaoNormal.y = height - 350;
    botaoNormal.draw();

  }
  _botaoH() {

    botaoHard.x = width - 425;
    botaoHard.y = height - 250;
    botaoHard.draw();

  }

}