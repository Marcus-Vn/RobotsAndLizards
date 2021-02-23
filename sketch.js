  function setup() {
    createCanvas(720, 512);
    frameRate(40);
    SomDano.pan(0.7);
    jogo = new Jogo();
    jogoHard = new JogoHard();
    telaInicial = new TelaInicial();
    abertura = new Abertura();
    gameOver = new GameOver();
    jogo.setup();
    jogoHard.setup();
    cenas = {
      jogo,
      jogoHard,
      telaInicial,
      abertura,
      gameOver
    
    };
    
    botao = new Botao("Jogar",width/2,height/2);
    audio = new Audio("Audio",width/3,height/3);
    TrilhaSonora.loop();

  
  }

  function keyPressed() {
    jogo.KeyPressed(key);
  }


  function draw() {
    cenas[CenaAtual].Draw();

  }