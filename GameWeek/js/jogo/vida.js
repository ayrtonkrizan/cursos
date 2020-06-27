export default class Vida {
    constructor(p, maximo, inicial) {
        this.imagem = p.loadImage('assets/imagens/jogo/coracao.png');

        this.maximo = maximo;
        this.inicial = inicial;
        this.vidas = inicial;


        this.x = 10;
        this.y = 10;
        this.largura = 25;
        this.altura = 25;
    }

    draw(p) {
        for (let i = 0; i < this.vidas; i++){
            let x = (this.largura + this.x) * i + this.x;
            p.image(this.imagem, x, this.y, this.largura, this.altura);
        }
    }

    ganhaVida(){
        if(this.vidas < this.maximo) this.vidas++
    }

    perdeVida(){
        this.vidas--
    }
}