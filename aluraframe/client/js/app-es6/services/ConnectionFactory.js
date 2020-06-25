
const stores = ['negociacoes'];
const version = 4;
const dbName = 'aluraframe';

var connection = null;
var close = null;

export class ConnectionFactory {

    constructor() {

        throw new Error("ConnectionFactory não pode ser instanciada");
    }

    static getConnection() {

        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {
                ConnectionFactory._createStores(e.target.result);
            };
            openRequest.onsuccess = e => {
                if(!connection) {
                    connection = e.target.result;
                    close = connection.close.bind(connection);
                    connection.close = function(){
                        throw new Error("Metodo close nao pode ser chamado");
                    }
                }
                resolve(connection);
            };
            openRequest.onerror = e => {
                console.log(e.target.error);
                reject(e.target.error.name);
            };
        });
    }

    static closeConnection(){
        if(connection){
            close();
            connection = null;
        }
    }

    static _createStores(connection) {
        // criando nossos stores!
        stores.forEach(store => {
            if(connection.objectStoreNames.contains(store)) 
                connection.deleteObjectStore(store);
            connection.createObjectStore(store, { autoIncrement: true });
        });
    }
}
