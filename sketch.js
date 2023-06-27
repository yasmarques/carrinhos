
function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  moveCarro();
  moveAtor();
  repeticao_carro();
  Colisao();;
  ViewPontos();
  Pontos();
}


