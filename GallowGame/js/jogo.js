const criaJogo = (sprite) =>{
    const _sprite = sprite;
    const _etapas = {
        inicioJogo: 1,
        setPalavraSecreta: 2
    };
    
    let _etapa = 1;
    let _palavraSecreta = "";
    let _gabarito = [];
    let _lacunas = [];
    let _ganhou = false;
    let _perdeu = false;

    const iniciaVariaveis = function (){
        _palavraSecreta = "";
        _gabarito = [];
        _lacunas = [];
        _ganhou = false;
        _perdeu = false;
        _etapa = 1;
    }
    

    //Funcao criada para consistências antes de trocar etapa!
    const trocaEtapa = novaEtapa => {
        switch(novaEtapa){
            case _etapas["setPalavraSecreta"]:
                if(_etapa != 1) return false;
                break;
        }
        _etapa = novaEtapa;
        return true;
    }
    const preencheLacunas = letra =>{
        var retorno = false;
        _gabarito.find(function(l, index){
            if(l.toUpperCase() === letra.toUpperCase()){
                _lacunas[index] = letra;
                retorno = true;
            }
        });
        return retorno;
    }

    const existeLacunasVazias = () => _lacunas.some(function(l){return l==""});
    
    const processaChute = letra => {
        if(!letra.trim()) throw Error ('Chute Inválido!!');
        if(!preencheLacunas(letra)){
            _sprite.nextFrame();
            _perdeu = _sprite.isFinished();
        }else{
            _ganhou = !existeLacunasVazias();
        }
    }

    const setPalavraSecreta = palavra =>{
        if(!palavra.trim()) throw Error ('Palavra Inválida!!');
        if(trocaEtapa(_etapas["setPalavraSecreta"])){
            _palavraSecreta = palavra;
            _gabarito = palavra.split('');
            _lacunas = Array(palavra.length).fill('');
        }
    }
    
    const reinicia = () => {
        iniciaVariaveis();
        _sprite.reset();
    }

    const getLacunas = () => _lacunas;

    const getEtapa = ()=>_etapa;

    const ganhou = () =>_ganhou;


    const perdeu = () =>_perdeu;


    const ganhouOuPerdeu = () => (_ganhou || _perdeu);


    return {
        setPalavraSecreta, 
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu, 
        reinicia
    }
}