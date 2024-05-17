//declaracion de variables
let circulorojoX, circuloazulX, circulorojoY, circuloazulY;
//velocidades de los círculos en las direcciones X e Y.
let velocidadrojoX, velocidadazulX, velocidadrojoY,velocidadazulY;
//colores de los círculos.
let colorrojo, colorazul;
// bandera: ha ocurrido una colisión entre los círculos.
let banderacolision = false;
//guarda el tiempo de la colisión en milisegundos.
let tiempodecolision;
//bandera para cambiar los colores de los círculos.
let bandera = true;

function setup() {
  createCanvas(600, 600);
  circulorojoX = width / 4;
  cirucuoazulX = 3 * width / 4;
  circulorojoY = height / 4; 
  circuloazulY = 3 * height / 4;
  velocidadrojoX = 3;
  velocidadazulX = 2;
  velocidadrojoY = 4;
  velocidadazulY = 5;
  colorrojo = color(255, 0, 0);
  colorazul = color(0, 0, 255);
}

function draw() {
  background(220);
  
  //posiciones de los círculos
  circulorojoX += velocidadrojoX;
  circuloazulX += velocidadazulX;
  circulorojoY += velocidadrojoY;
  circuloazulY += velocidadazulY;


 // Comprobar colisiones con las paredes
  if (circulorojoX < 20 || circulorojoX > width - 20) {
    velocidadrojoX *= -1;
  } 
  if (circuloazulX < 20 || circuloazulX > width - 20) {
    velocidadazulX *= -1;
  }

  if (circulorojoY < 20 || circulorojoY > height - 20) {
    velocodadrojoY *= -1;
  } 
  
    if (circuloazulY < 20 || circuloazulY > height - 20) {
    velocodadazulY *= -1;
  } 
  
     // Verificar colisión con el piso o el techo
  if (circuloazulY >= height - 20 && bandera == true) {
   colorazul = color(0, 255, 0); // Cambiar 
      bandera = false;
  } else {
    circuloazul = color(0, 0, 255); 
    bandera == true;
  }
  
   if (circulorojoY < 20 && bandera == true ) {
    colorrojo = color(0, 255, 0); // Cambiar 
    bandera = false;
  } else {
    colorrojo = color(255, 0, 0);
    bandera = true;
  }
  

  // Dibujar los círculos
  fill(colorrojo);
  ellipse(circulorojoX, circulorojoY, 40, 40);
  fill(colorazul);
  ellipse(circuloazulX,circuloazulY, 40, 40);

}
