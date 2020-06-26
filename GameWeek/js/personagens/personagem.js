import Animacao from "../jogo/animacao.js";
// import 'https://cdn.jsdelivr.net/gh/bmoren/p5.collide2D/p5.collide2d.min.js'

export default class Personagem extends Animacao {
    constructor(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
      super(p,matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
      this.variacaoY = variacaoY;
      this.yInicial = p.height - this.altura - this.variacaoY;
      this.y = this.yInicial;
      
      this.velocidadeDoPulo = 0;
      this.gravidade = 6;
      this.alturaDoPulo = -50
      this.pulos = 0
    }
    
    pula(p) {
      if(this.pulos < 2) {
        this.velocidadeDoPulo = this.alturaDoPulo
        this.pulos++
        if(this.somDoPulo) this.somDoPulo.play();
      }
    }
    
    aplicaGravidade(p) {
      this.y = this.y + this.velocidadeDoPulo
      this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
      
      if(this.y > this.yInicial){
        this.y = this.yInicial
        this.pulos = 0
      }
    }
    
    estaColidindo(inimigo) {
      const precisao = .7
      const colisao = this.collideRectRect(
        this.x, 
        this.y, 
        this.largura * precisao, 
        this.altura * precisao,
        inimigo.x,
        inimigo.y,
        inimigo.largura * precisao,
        inimigo.altura * precisao
      );
      
      return colisao;
    }
  
  }