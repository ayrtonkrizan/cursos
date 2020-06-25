export default class Cenario {
  constructor(p, velocidade) {
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = p.width;
    this.imagem = p.loadImage('../../imagens/cenario/floresta.png');
  }

  exibe(p) {
    p.image(this.imagem, this.x1, 0, p.width, p.height);
    p.image(this.imagem, this.x2, 0, p.width, p.height);
  }

  move(p) {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;

    if (this.x1 < -p.width) {
      this.x1 = p.width;
    }
    if (this.x2 < -p.width) {
      this.x2 = p.width;
    }
  }
}