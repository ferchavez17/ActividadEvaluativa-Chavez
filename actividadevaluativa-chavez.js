// Declaración de variables
let circulorojoX, circuloazulX, circulorojoY, circuloazulY;
let velocidadrojoX, velocidadazulX, velocidadrojoY, velocidadazulY;
let colorrojo, colorazul;
let banderacolision = false;
let tiempodecolision;
let banderaRojo = true;
let banderaAzul = true;

function setup() {
  createCanvas(600, 600);
  circulorojoX = width / 4;
  circuloazulX = 3 * width / 4;
  circulorojoY = height / 4;
  circuloazulY = 3 * height / 4;
  velocidadrojoX = 3;
  velocidadazulX = 2;
  velocidadrojoY = 4;
  velocidadazulY = 2;
  colorrojo = color(255, 0, 0);
  colorazul = color(0, 0, 255);
}

function draw() {
  background(220);
  
  // Actualizar posiciones de los círculos
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

  if (circulorojoY < 20) {
    velocidadrojoY *= -1;
    if (banderaRojo) {
      colorrojo = color(random(255), random(255), random(255));
      banderaRojo = false;
    }
  } else if (circulorojoY > height - 20) {
    banderaRojo = true;
  }
  
  if (circuloazulY > height - 20) {
    velocidadazulY *= -1;
    if (banderaAzul) {
      colorazul = color(random(255), random(255), random(255));
      banderaAzul = false;
    }
  } else if (circuloazulY < 20) {
    banderaAzul = true;
  }

  // Verificar colisión entre los círculos
  let distancia = dist(circulorojoX, circulorojoY, circuloazulX, circuloazulY);
  if (distancia < 40) {
    if (!banderacolision) {
      velocidadrojoX *= -1;
      velocidadrojoY *= -1;
      velocidadazulX *= -1;
      velocidadazulY *= -1;
      colorrojo = color(128, 0, 128);
      colorazul = color(128, 0, 128);
      tiempodecolision = millis();
      banderacolision = true;
    }
  }

  // Controlar el cambio de color post-colisión
  if (banderacolision) {
    let tiempoActual = millis();
    if (tiempoActual - tiempodecolision > 1500) {
      colorrojo = color(255, 0, 0);
      colorazul = color(0, 0, 255);
      banderacolision = false;
    } else {
      let factor = (tiempoActual - tiempodecolision) / 1500;
      colorrojo = lerpColor(color(128, 0, 128), color(255, 0, 0), factor);
      colorazul = lerpColor(color(128, 0, 128), color(0, 0, 255), factor);
    }
  }

  // Dibujar los círculos
  fill(colorrojo);
  ellipse(circulorojoX, circulorojoY, 40, 40);
  fill(colorazul);
  ellipse(circuloazulX, circuloazulY, 40, 40);
}
