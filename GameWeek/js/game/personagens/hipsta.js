import Personagem from "./personagem.js";

const matriz = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
  ]

export default class Hipsta extends Personagem {
    constructor(p, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        let imagem = p.loadImage('../../imagens/personagem/correndo.png');
        super(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    }


}