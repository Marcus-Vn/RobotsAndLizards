let ImagemCenario;
let ImagemCenario2;
let ImagemPersonagem;
let ImagemPulo;
let ImagemInimigo;
let ImagemInimigoVoador;
let cenario;
let cenario2;
let ImagemGameOver;
let ImagemPause;
let ImagemBlurGrey
let ImagemBlur;
let ImagemTelaInicial;
let reiniciar = false;

let music = true;
let audio;

let ImagemVida;
let vida;
let vidaHard;

let SomPulo;
let SomDano;
let TrilhaSonora;
let personagem;
let inimigo;
let pontuacao;
let myFont;
let myFont2;
let inimigoVoador;

let inimigoAtual;

let jogo;
let jogoHard;
let CenaAtual = "telaInicial";
let cenas;
let telaInicial;
let botao;
let botaoReplay;
let botaoNormal;
let botaoHard;

let pause = true;
let podepausar = false;


const matrizInimigo = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [156, 0],
  [156, 0],
  [156, 0],
  [156, 0],
  [312, 0],
  [312, 0],
  [312, 0],
  [312, 0],
  
];
const matrizInimigoVoador = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [156, 0],
  [156, 0],
  [156, 0],
  [156, 0],
  [312, 0],
  [312, 0],
  [312, 0],
  [312, 0],
  
];
const matrizPersonagem = [
      [0, 0],
      [0, 0],
      [0, 0],
      [176, 0],
      [176, 0],
      [176, 0],
      [352, 0],
      [352, 0],
      [352, 0],
      [528, 0],
      [528, 0],
      [528, 0],
      [704, 0],
      [704, 0],
      [704, 0],
      [0, 176],
      [0, 176],
      [0, 176],
      [176, 176],
      [176, 176],
      [176, 176],
      [352, 176],
      [352, 176],
      [352, 176],
      [528, 176],
      [528, 176],
      [528, 176],
      [704, 176],
      [704, 176],
      [704, 176]
];
const matrizPulo = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]];

const inimigos = [];
