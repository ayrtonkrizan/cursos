import Inimigo from "./inimigo.js";

const matriz = [
    [0, 0],
    [400, 0],
    [800, 0],
    [1200, 0],
    [1600, 0],
    [0, 400],
    [400, 400],
    [800, 400],
    [1200, 400],
    [1600, 400],
    [0, 800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200],
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
];

const largura = 200;
const altura = 200;
const larguraSprite= 400;
const alturaSprite= 400;


export default class Troll extends Inimigo {
    constructor(p, x, variacaoY, velocidade, delay) {
        let imagem = p.loadImage('assets/imagens/inimigos/troll.png');
        super(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay);
    }


}