class Personagem extends Animacao {

  constructor(matriz, imagem, x, variacaoy, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoy, largura, altura, larguraSprite, alturaSprite);
    this.matriz = matriz;
    
    this.Ar = false;

    this.variacaoy = variacaoy;
    this.Contpulo = 2;
    this.yInicial = height - this.altura;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.alturaDoPulo = -30;
    
    this.invencivel = false;

  }



  pula() {
    if (this.ContPulo > 0) {
      this.velocidadeDoPulo = this.alturaDoPulo;
    }
    this.ContPulo--;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.ContPulo = 2;
    }
    
    if(this.y < this.yInicial)
    {
      this.Ar = true;
    }
    else
    {
      this.Ar = false;
    }
    
  }
  
  
  tornarInvencivel()
  {
    this.invencivel = true;
    setTimeout(() =>{
      this.invencivel = false;   
    },1000)
    
  }

  Colidiu(inimigo) {
    if(this.invencivel)
    {
     return false; 
    }
    const precisao = 0.5;
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao - 15, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

    return colisao;
  }

}