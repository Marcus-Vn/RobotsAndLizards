class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = [{
        inimigo: 0,
        velocidade: parseInt(random(10, 25))

      },
      {
        inimigo: 1,
        velocidade: parseInt(random(20, 45))

      },
      {
        inimigo: 0,
        velocidade: parseInt(random(20, 35))

      },
      {
        inimigo: 0,
        velocidade: parseInt(random(30, 45))

      },
      {
        inimigo: 1,
        velocidade: parseInt(random(25, 45))

      },
      {
        inimigo: 1,
        velocidade: parseInt(random(10, 30))

      },
      {
        inimigo: 0,
        velocidade: parseInt(random(15, 35))

      },
      {
        inimigo: 1,
        velocidade: parseInt(random(30, 45))

      },

    ]
  }

  setup() {
    cenario2 = new Cenario(ImagemCenario2, 2);
    cenario = new Cenario(ImagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);

    personagem = new Personagem(matrizPersonagem, ImagemPersonagem, 0, 20, 110, 135, 176, 176);
    const inimigoChao = new Inimigo(matrizInimigo, ImagemInimigo, width - 100, -10, 100, 120, 156, 0, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, ImagemInimigoVoador, width - 100, 150, 120, 140, 156, 0, 15);

    inimigos.push(inimigoChao);
    inimigos.push(inimigoVoador);
  }

  KeyPressed(key) {
    if (key == "ArrowUp" || keyCode == 32) {
      personagem.pula();
      if (personagem.Ar == false && music) {
        SomPulo.play();
      }
    }
    if (key == "Enter" && podepausar) {
      pause = !pause;
      if (pause == false) {
        noLoop();
        
      } else {
        loop();
      }
    }

  }

  Draw() {

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigovisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;

    cenario2.exibe();
    cenario2.move();
    cenario.exibe();
    cenario.move();

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    if (personagem.Ar == false) {
      personagem.imagem = ImagemPersonagem;
      personagem.matriz = matrizPersonagem;

    } else {
      personagem.imagem = ImagemPulo;
      personagem.matriz = matrizPulo;
    }
    personagem.exibe();
    personagem.aplicaGravidade();

    if (inimigovisivel) {
      this.indice++;
      if (linhaAtual.inimigo == 0) {
        inimigo.aparece(height - inimigo.altura);
      } else if (linhaAtual.inimigo == 1) {
        inimigo.aparece(parseInt(random(200, height - inimigo.altura)));
      }
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }

    }

    inimigo.exibe();
    inimigo.move();

    if (personagem.Colidiu(inimigo)) {
      if (music) {
        SomDano.pan(0.9);
        SomDano.play();
      }
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        if (music) {
          SomPerdeu.pan(0.8);
          SomPerdeu.play();
          TrilhaSonora.pan(0.6);
        }
        gameOver.ApareceReiniciar();
        CenaAtual = "gameOver";
        podepausar = false;
        reiniciar = true;
      }
    }
  }

}