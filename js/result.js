import { formula } from './data.js';

export function result(name, storage, transfer, option) {
    let result = 0;

    if (typeof(formula[`${name}`].storage) === 'object') {
        formula[`${name}`].storage.forEach(element => {
            if (Object.keys(element)[0] === option) {
                storage >= Object.values(element)[0][0]
                ? result += (storage - Object.values(element)[0][0]) * Object.values(element)[0][1]
                : result += 0;
            }
        });
    } else {
        result += storage * formula[`${name}`].storage;
    }
    if (typeof(formula[`${name}`].transfer) === 'object') {
        formula[`${name}`].transfer.forEach(element => {
            if (Object.keys(element)[0] === option) {
                transfer >= Object.values(element)[0][0]
                ? result += (transfer - Object.values(element)[0][0]) * Object.values(element)[0][1]
                : result += 0;
            }
        });
    } else {
        result += transfer * formula[`${name}`].transfer;
    }

    if (formula[`${name}`].min) {
        result <= formula[`${name}`].min ? result = formula[`${name}`].min : result;
    }
    if (formula[`${name}`].max) {
        result >= formula[`${name}`].max ? result = formula[`${name}`].max : result;
    }

    return result;
}
