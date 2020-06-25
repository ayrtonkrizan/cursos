const Mural = (function(_render, Filtro){
    "use strict"
    let cartoes = pegaCartoesUsuario(); 
    
    const render = () => _render({cartoes: cartoes, filtro: Filtro.tagsETexto});
    render();

    Filtro.on("filtrado", render)


    function pegaCartoesUsuario(){
        let cartoesLocal = JSON.parse(localStorage.getItem(usuario))
        if(cartoesLocal){
            return cartoesLocal.map(cartaoLocal => {
                let cartao = new Cartao(cartaoLocal.conteudo, cartaoLocal.tipo)
                preparaCartao(cartao)
                return cartao
            })
        } else {
            return []
        }
    }
    function preparaCartao(cartao){
        const urlsImagens = Cartao.pegaImagens(cartao)
        urlsImagens.forEach(url => {
            fetch(url).then(resposta => {
            caches.open("ceep-imagens").then(cache => {
                cache.put(url, resposta)
                })
            })
        })
        
        cartao.on("mudanca.**", salvaCartoes)
        cartao.on("remocao", ()=>{
            cartoes = cartoes.slice(0)
            cartoes.splice(cartoes.indexOf(cartao),1)
            salvaCartoes()
            render()
        })
    }

    function salvaCartoes(){
        localStorage.setItem(usuario, JSON.stringify(
            cartoes.map(cartao => ({conteudo: cartao.conteudo, tipo: cartao.tipo}))
        ))
    }

    login.on("login", ()=>{
        cartoes = pegaCartoesUsuario()
        render()
    })

    login.on("logout", ()=> {
        cartoes = []
        render()
    })

    function adiciona(cartao){
        if(logado){
            cartoes.push(cartao)
            salvaCartoes()
            //cartao.on("mudanca.**", render)
            preparaCartao(cartao)
        }
        else{
            alert("Você precisa estar logado para adcionar cartões");
        }
        render()
        return true
    }

    return Object.seal({
        adiciona
    })

})(Mural_render, Filtro)
