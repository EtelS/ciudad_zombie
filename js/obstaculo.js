var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;
  this.choca_jugador = function(jugador){
    jugador.perderVidas(this.potencia);
    this.potencia = 0;//le pongo la potencia a 0
  }
  console.log(this.potencia);
}

