import Cenario from "../jogo/cenario.js";
import Botao from "../componentes/botao.js";

export default class Inicial extends Cenario {
    constructor(p, alteraCena) {
        super(p);
        this.fonte = p.loadFont("assets/fonteTelaInicial.otf")
        this.imagem = p.loadImage('assets/imagens/cenario/telaInicial.png');
        this.botao = new Botao(p, "Iniciar", p.width/2, p.height/7*5);
        this.botao.mousePressed(()=>{
            this.botao.remove();
            alteraCena('level1');
        })
    }

    draw(p){
        this._imagemFundo(p);
        this._texto(p);
        this.botao.draw(p);
    }

    _imagemFundo(p){
        p.image(this.imagem, 0, 0, p.width, p.height)
    }

    _texto(p){
        p.textFont(this.fonte);
        p.textAlign(p.CENTER);
        p.textSize(50);
        p.text("As Aventuras de", p.width/2, p.height /3);
        p.textSize(150);
        p.text("Hipsta", p.width/2, p.height /5*3);
    }

}
