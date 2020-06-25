var logado = JSON.parse(localStorage.getItem("logado"));
var usuario = localStorage.getItem("nomeUsuario");
var login = new EventEmitter2();

LoginUsuario_render({
    logado: logado
    ,usuario: localStorage.getItem("nomeUsuario")
    ,onLogin: (nomeUsuario) => {
      logado = true;
      usuario = nomeUsuario;
      localStorage.setItem("logado", true);
      localStorage.setItem("nomeUsuario", nomeUsuario);

      login.emit('login');
    }
    ,onLogout: () => {
        logado = false;
        usuario = '';
        localStorage.setItem("logado", false);
        localStorage.removeItem("nomeUsuario");

        login.emit('logout');
    }
  
    })