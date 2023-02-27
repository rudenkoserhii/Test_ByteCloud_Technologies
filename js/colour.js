import { refs } from './refs.js';
import { formula } from './data.js';

export function colour () {
    const services = [
        Number(refs.answerBackblaze.innerText),
        Number(refs.answerBunny.innerText),
        Number(refs.answerScaleway.innerText),
        Number(refs.answerVultr.innerText)
    ];
    services.forEach((el, i) => el === Math.min(...services) 
        ? refs[`answerRange${Object.keys(formula)[i][0].toLocaleUpperCase()}${Object.keys(formula)[i].slice(1)}`]
            .style.backgroundColor = Object.values(formula)[i].color
        : refs[`answerRange${Object.keys(formula)[i][0].toLocaleUpperCase()}${Object.keys(formula)[i].slice(1)}`]
            .style.backgroundColor = 'gray'
        )
}
