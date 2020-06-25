import Cenario from "./cenario.js";
import Personagem from "./personagens/hipsta.js";
import Gotinha from "./inimigos/gotinha.js";
import GotinhaVoadora from "./inimigos/gotinha-voadora.js";
import Troll from "./inimigos/troll.js";


let inimigos = [];
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

const sketch = (p) => {
    let somDoPulo;
    let somDoJogo;
    let cenario;
    let personagem;
    let imagemGameOver;

    p.preload = () => {
        imagemGameOver = p.loadImage('../../imagens/assets/game-over.png');

        somDoJogo = p.loadSound('sons/trilha_jogo.mp3');
        somDoPulo = p.loadSound('sons/somPulo.mp3');
    }

    p.setup = () => {
        let width = p.width
        p.createCanvas(window.innerWidth, window.innerHeight);
        cenario = new Cenario(p, 3);
        personagem = new Personagem(p, 0, 30, 110, 135, 220, 270);
        inimigo = new Gotinha(p, width - 52, 30, 52, 52, 104, 104, 10, 200);
        inimigoVoador = new GotinhaVoadora(p, width - 52, 200, 100, 75, 200, 150, 10, 1500);
        inimigoGrande = new Troll(p, width, 0, 200, 200, 400, 400, 10, 2500);


        inimigos.push(inimigo)
        inimigos.push(inimigoVoador)
        inimigos.push(inimigoGrande)

        p.frameRate(40)
        // somDoJogo.loop();
    };

    p.keyPressed = () => {
        if (p.key === 'ArrowUp') {
            console.log('aqui')
            personagem.pula()
            somDoPulo.play()
        }
    }

    p.draw = () => {
        cenario.exibe(p);
        cenario.move(p);

        personagem.exibe(p);
        personagem.aplicaGravidade();

        inimigos.forEach(inimigo => {
            inimigo.exibe(p)
            inimigo.move(p)
            if (personagem.estaColidindo(inimigo)) {
                p.image(imagemGameOver, p.width / 2 - 200, p.height / 3)
                // p.noLoop()
            }

        })
    };
};


/** Start P5 */
new p5(sketch);
// Collide.collideRectRect = collideRectRect;
