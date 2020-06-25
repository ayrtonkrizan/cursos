import Inimigo from "./inimigo.js";

const matriz = [
    [0, 0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
]

export default class GotinhaVoadora extends Inimigo {
    constructor(p, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
        let imagem = p.loadImage('assets/imagens/inimigos/gotinha-voadora.png');
        super(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay);
    }


}