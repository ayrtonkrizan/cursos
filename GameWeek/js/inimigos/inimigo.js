import Animacao from "../jogo/animacao.js";

export default class Inimigo extends Animacao {
  constructor(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, precisao = 0.7) {
    super(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, precisao)

    this.velocidade = velocidade;
    this.precisao = precisao;
    this.x = p.width
  }

  move(p) {
    this.x = this.x - this.velocidade

    if (this.x < -this.largura-200) {
      this.x = p.width;
    }
    else
      this.calcXPreciso();
  }

  passou() {
    return this.x < -this.largura
  }
}