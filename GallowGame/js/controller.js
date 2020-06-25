const criaController = jogo=> {

    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');

    const exibeLacunas = () => {
        var li = '<li class="lacuna">{0}</li>';
        $lacunas.html(
            jogo.getLacunas().map(function(l){
                return li.replace('{0}', l);
            }).join('')
        );
    }

    const mudaPlaceHolder = (texto) => $entrada.attr("placeholder", texto)

    const guardaPalavraSecreta = () => {
        let palavra = $entrada.val().trim();
        try{
            jogo.setPalavraSecreta(palavra);
            if(jogo.getEtapa()== 2){
                mudaPlaceHolder("Chute");
                exibeLacunas();
            }
        }
        catch(err){
            alert(err.message);
        }
    }
    
    const fazJogada = () => {
        try{
            jogo.processaChute($entrada.val().trim().substr(0, 1));
            exibeLacunas();
            if(jogo.ganhouOuPerdeu()){
                setTimeout(terminaJogo, 100);
            }
        }
        catch(err){
            alert(err.message);
        }
            
    }
    
    const terminaJogo = () => {
        if(jogo.ganhou())
            alert("Parabéns você venceu!");
        else
            alert("Você perdeu, mas quem sabe na próxima!");
        mudaPlaceHolder('Palavra secreta');
        jogo.reinicia();
        exibeLacunas();
    }

    const inicia = () => {

        $entrada.keypress(event => {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        $entrada.val("");
                        break;
                    case 2:
                        fazJogada();
                        $entrada.val("");
                        break;
                }
            }
        });
    }
    return { inicia};
};