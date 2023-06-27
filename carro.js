let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let vel = [2, 2.5, 3.2, 5, 3.3, 2.3];


function mostraCarro(){
  for (let i = 0; i < lsCarro.length; i++){
    image(lsCarro[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function moveCarro(){
  for (let i = 0; i < lsCarro.length; i++){
  xCarros[i] -= vel[i];
  }  
}

function repeticao_carro(){
  for (let i = 0; i < lsCarro.length; i++){
  if (finalTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function finalTela(xCarros){
  return xCarros < - 50;
}