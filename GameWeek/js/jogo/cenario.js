export default class Cenario {
  constructor(p, velocidade) {
    this.playing = false;
    this.imagemGameOver = p.loadImage('assets/imagens/jogo/game-over.png');
    this.somDaCena = p.loadSound('assets/sons/trilha_jogo.mp3');
    this.imagem = p.loadImage('assets/imagens/cenario/floresta.png');
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = p.width;
  }

  draw() {
    console.log('FALTA SOBRESCREVER O METODO DRAW!');
  }

  keyPressed(key) {
    console.log(`Tecla pressionada |${key}|`)
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

  playSom(toca) {
    if (toca && !this.playing) {
      setTimeout(() => this.somDaCena.loop(), 2000);
      this.playing = true;
    }
  }
}