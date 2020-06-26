export default class Botao {
    constructor(p, texto, x, y) {
        this.x = x;
        this.y = y;
        this.texto = texto;
        this._botao = p.createButton(this.texto);
        this._botao.addClass('botao-tela-inicial');
    }

    draw(p) {
        this._botao.position(this.x, this.y);
        this._botao.center('horizontal');
    }

    mousePressed(fn){
        this._botao.mousePressed(fn);
    }

    remove(){
        this._botao.remove();
    }
}