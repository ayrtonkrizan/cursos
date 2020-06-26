import Cenario from "../jogo/cenario.js";
import Pontuacao from "../jogo/pontuacao.js";
import Personagem from "../personagens/hipsta.js"
import Gotinha from "../inimigos/gotinha.js";
import GotinhaVoadora from "../inimigos/gotinha-voadora.js";
import Troll from "../inimigos/troll.js";

export default class Level extends Cenario {
    constructor(p, alteraCena) {
        super(p, alteraCena, 3);
        this.setup(p);
    }

    setup(p) {
        let width = p.width;
        this.inimigos = [];
        this.inimigoAtual = 0;
        this.pontuacao = new Pontuacao();
        this.personagem = new Personagem(p, 0, 30);
        let inimigo = new Gotinha(p, width - 52, 30, 10, 100);
        let inimigoVoador = new GotinhaVoadora(p, width - 52, 200, 10, 100);
        let inimigoGrande = new Troll(p, width, 0, 10, 100);


        this.inimigos.push(inimigo);
        this.inimigos.push(inimigoVoador);
        this.inimigos.push(inimigoGrande);

    }

    draw(p) {
        this.exibe(p);
        this.move(p);

        this.personagem.exibe(p);
        this.personagem.aplicaGravidade();

        this.pontuacao.exibe(p)
        this.pontuacao.adicionarPonto(p)

        this.inimigo = this.inimigos[this.inimigoAtual];
        this.inimigo.exibe(p);
        this.inimigo.move(p);

        if (this.personagem.estaColidindo(this.inimigo)) {
            this.gameOver(p);
        }

        if (this.inimigo.passou()) {
            this.inimigoAtual = (this.inimigoAtual + 1) % this.inimigos.length;
            this.inimigo.velocidade = parseInt(p.random(10, 30));
        }

    }

    keyPressed(key, p) {
        if (key === 'ArrowUp') {
            this.personagem.pula();
        }
        if(key==='Enter'){
            this.reset(p);
        }
    }
}