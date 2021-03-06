import Inimigo from "./inimigo.js";

const matriz = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
  ]

const largura = 52;
const altura = 52;
const larguraSprite = 104;
const alturaSprite = 104;
const precisao = 0.7

export default class Gotinha extends Inimigo {
    constructor(p, x, variacaoY, velocidade) {
        let imagem = p.loadImage('assets/imagens/inimigos/gotinha.png');
        super(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, precisao);
    }


}