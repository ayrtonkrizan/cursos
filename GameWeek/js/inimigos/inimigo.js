import Animacao from "../jogo/animacao.js";

export default class Inimigo extends Animacao {
  constructor(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay, precisao = 0.7) {
    super(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, precisao)

    this.velocidade = velocidade;
    this.delay = delay;
    this.precisao = precisao;
    this.x = p.width + this.delay
  }

  move(p) {
    this.x = this.x - this.velocidade

    if (this.x < -this.largura - this.delay) {
      this.x = p.width
    }
    this.calcXPreciso();
  }

  passou() {
    return this.x < -this.largura
  }
}