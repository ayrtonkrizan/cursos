import './utils/array-helpers.js';
import {timeoutPromise, retry} from './utils/promise-helpers.js'
import {notaService as service} from './nota/service.js';
import {takeUntil, debounceTime, compose, partialize, pipe} from './utils/operators.js';
import {EventEmitter} from './utils/event-emitter.js';
import { Maybe } from './utils/maybe.js';

/*
const resultado = Maybe
    .of(null)
    .map(value => value + 10) 
    .map(value => value + 30)
    .getOrElse(0); // retorna 50


const textToArray = textM => textM.map(text => Array.from(text));
const arrayToText = arrayM => arrayM.map(array => array.join(''));
const transform = pipe(textToArray, arrayToText);
const result = transform(Maybe.of(null));
// const result = transform(Maybe.of('Cangaceiro'));
alert(result.getOrElse(''));
*/

const operations = compose(
    partialize(debounceTime, 500),
    partialize(takeUntil, 3)
)

const action =  operations(() =>
        retry(3, 1000, () => timeoutPromise(200, service.sumItems('2143')))
        .then(data=>EventEmitter.emit('itensTotalizados', data))
        .catch(console.log)
);


document
    .querySelector('#myButton')
    .onclick = action;