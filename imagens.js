let imgEstrada;

let imgAtor;

let carro1;
let carro2;
let carro3;


let trilha
let crash
let ponto


function preload(){
  imgEstrada = loadImage("img/estrada.png");
  
  imgAtor = loadImage("img/ator-1.png");
  
  carro1 = loadImage("img/carro-1.png");
  carro2 = loadImage("img/carro-2.png");
  carro3 = loadImage("img/carro-3.png");
  lsCarro = [carro1, carro2, carro3, carro1, carro2, carro3]
  
  trilha = loadSound("sons/trilha.mp3");
  crash = loadSound("sons/colidiu.mp3");
  ponto = loadSound("sons/pontos.wav");
}