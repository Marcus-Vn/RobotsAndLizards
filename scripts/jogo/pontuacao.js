class Pontuacao
{
  constructor()
  {
    this.pontos = 0;
  }
  
  exibe()
  {
    textAlign(RIGHT);
    fill("#0f0045");
    textFont(myFont);
    textSize(40);
    text(parseInt(this.pontos),width-30,50)
    
  }
  
  adicionarPonto()
  {
    this.pontos += 0.1;
  
  }
  
}