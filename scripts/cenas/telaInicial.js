class TelaInicial {
  constructor() {


  }

  Draw(){
    this._imagemDeFundo();
    this._botao();
    this._audio();
  }
  
  _imagemDeFundo()
  {
    image(ImagemTelaInicial, 0, 0, width, height);
  }
  
  _botao()
  {
    botao.x = width - 260;
    botao.y = height - 170;
    botao.draw();

  }
  
  _audio()
  {
    audio.x = width - 100;
    audio.y = height - 500;
    audio.draw();
  }
  


}