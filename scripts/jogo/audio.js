class Audio
{
constructor(texto,x,y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.audio = createButton(this.texto);
    this.audio.mouseClicked(() => this.mudarAudio());
    this.audio.addClass("botao-audio");
  }
  
  draw()
  {
    this.audio.position(this.x,this.y);
  }
  
  mudarAudio()
  {
    music = !music;
    if(music)
    {
      TrilhaSonora.loop();
    }
    else
    {
      TrilhaSonora.stop();
    }
  }
  
}