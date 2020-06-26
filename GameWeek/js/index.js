import Level1 from "./cenas/level1.js";
import Inicial from "./cenas/inicial.js";

const sketch = (p) => {
    let cenaAtual = 'inicial';
    let cenas = {};

    const alteraCena = cena => {
        cenaAtual = cena;
    }

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        cenas = {
            inicial: new Inicial(p, alteraCena),
            level1: new Level1(p, alteraCena)
        }
        cenas[cenaAtual].playSom(false);

        p.frameRate(40);
    };

    p.keyPressed = () => {
        cenas[cenaAtual].keyPressed(p.key, p);
    }

    p.draw = () => {
        cenas[cenaAtual].draw(p);

    };
};


/** Start P5 */
new p5(sketch);
