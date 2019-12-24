var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,direccion) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion=direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
ZombieConductor.prototype.mover= function(){
    // Si la dirección es vertical se le aplica velocidad en el eje Y
    if (this.direccion == "v") {
      this.y += this.velocidad;
    }
    // Si la dirección es horizontal se le aplica velocidad en el eje X
    if (this.direccion == "h") {
      this.x += this.velocidad;
    }
      /* Invierto la direccion cuando llega a una punta, al multiplicar por -1 la velocdad se invierte la direccion*/
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
      this.velocidad *= -1;
    }
}
    /* si choca un tren pierde todas las vidas*/
  ZombieConductor.prototype.atacar = function(jugador) {
    jugador.perderVidas(jugador.vidas);//si choca el tren pierde todas las vidas
  };