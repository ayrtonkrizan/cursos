export default class Animacao {
  constructor(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, precisao) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = p.height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.precisao = precisao;
    this.frameAtual = 0;
    this.collideRectRect = p.collideRectRect;

    this.larguraPrecisa = parseInt(this.largura * this.precisao);
    this.alturaPrecisa = parseInt(this.altura * this.precisao);
    this.calcXPreciso();
    this.calcYPreciso();
  }

  exibe(p) {
    p.image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);

    p.noFill();
    p.rect(this.xPreciso, this.yPreciso, this.larguraPrecisa, this.alturaPrecisa)
    this.anima();
  }

  anima() {
    this.frameAtual++

    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0
    }
  }

  calcXPreciso() {
    this.xPreciso = parseInt(this.x + (this.largura - this.larguraPrecisa)/2)
  }
  calcYPreciso() {
    this.yPreciso = parseInt(this.y + (this.altura - this.alturaPrecisa)/2)
  }
}