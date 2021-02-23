class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoy, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoy, largura, altura, larguraSprite, alturaSprite);
    
    this.velocidade = 10;
    this.x = width;
    
  }

  move() {
    this.x = this.x - this.velocidade;
  }

  aparece(posicao) {
    this.x = width;
    this.y = posicao;
  }
}