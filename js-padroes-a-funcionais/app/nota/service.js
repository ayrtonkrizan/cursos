import {handleStatus} from '../utils/promise-helpers.js';
import {partialize, compose, pipe} from '../utils/operators.js';
import { Maybe } from '../utils/maybe.js';

const API = '/notas';
const getItemsFromNotas = notasM => notasM.map(notas => notas.$flatMap(nota => nota.itens));
const filterItemsByCode = (code, itemsM) =>  itemsM.map(items => items.filter(item => item.codigo == code));
const sumItemsValue = itemsM => itemsM.map(items => items.reduce((total, item) => total += item.valor, 0));


/*const sumItems = code => notas => notas
                            .$flatMap(nota => nota.itens)
                            .filter(item => item.codigo == code)
                            .reduce((total, item) => total += item.valor, 0);

*/
export const notaService = {
    listAll() {
        return fetch(API)
                .then(handleStatus)
                .then(notas => Maybe.of(notas))
                .catch(err => {
                    console.log(err);
                    return Promise.reject('Não foi possível obter as notas fiscais');
                })
    },
    sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code);
        //const sumItems = compose(sumItemsValue, filterItems, getItemsFromNotas);
        const sumItems = pipe(getItemsFromNotas, filterItems, sumItemsValue);

        return this.listAll()
                    .then(sumItems)
                    .then(result => result.getOrElse(0));
    }

}