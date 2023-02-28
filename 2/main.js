import {addBigInt, subBigInt, mulBigInt, divBigInt} from './operationsBigInt.js';

let a = '4321111987654321';
let b = '43211123456789';

console.log(addBigInt(a, b));
console.log(subBigInt(b, a));
console.log(mulBigInt(a, b));
console.log(divBigInt(a, b));
