let atorX = 85;
let atorY = 366;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imgAtor, atorX, atorY, 30, 30);
  
}

function moveAtor(){
  if (keyIsDown(UP_ARROW)){
    atorY -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
     if (verificaBorda()){
        atorY += 3
     }
   }
}

function Colisao(){
  for (let i = 0; i < lsCarro.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, atorX, atorY, 15)
    if (colisao){
      Colidiu();
      crash.play();
      if (maiorZero()){
        pontos -= 1;
      }
    }
  }
}
function Colidiu(){
   atorY = 366;
}

function ViewPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(255, 240, 60)
  text(pontos, width / 5, 27);
}

function Pontos(){
  if (atorY < 15){
    pontos++;
    ponto.play();
    Colidiu();
  }
}

function maiorZero(){
  return pontos > 0;
}

function verificaBorda(){
  return atorY < 366;
}