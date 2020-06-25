export default class Pontuacao {
    constructor() {
      this.pontos = 0
    }
    
    exibe(p) {
      p.textAlign(p.RIGHT)
      p.fill('#fff')
      p.textSize(50)
      p.text(parseInt(this.pontos), p.width - 30, 50)
    }
    
    adicionarPonto() {
      this.pontos = this.pontos + 0.2
    }
  }