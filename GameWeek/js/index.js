import Level1 from "./cenas/level1.js";
import Inicial from "./cenas/inicial.js";

const sketch = (p) => {
    // let cenaAtual = 'level1';
    let cenaAtual = 'inicial';
    let cenas = {};
    let config = {};

    const alteraCena = cena => {
        cenaAtual = cena;
        cenas[cenaAtual].reset(p);
        p.loop();
    }

    p.preload = ()=>{
        config = p.loadJSON("config.json")
    }

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        cenas = {
            inicial: new Inicial(p, alteraCena),
            level1: new Level1(p, alteraCena)
        }
        cenas[cenaAtual].playSom(false);

        p.frameRate(20);
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
