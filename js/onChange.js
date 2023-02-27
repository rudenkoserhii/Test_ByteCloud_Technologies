import { refs } from './refs.js';
import { resulting } from './resulting.js';
import { colour } from './colour.js';


export function onChange(e) {
    let storageValue = refs.inputStorage.value;
    let transferValue = refs.inputTransfer.value;
    let optBunny = Array.from(refs.optionsBunny).find(opt => opt.checked).value;
    let optScaleway = Array.from(refs.optionsScaleway).find(opt => opt.checked).value;

    if(e) {
        if (e.target.name === 'storage') {storageValue = e.target.value}
        if (e.target.name === 'transfer') {transferValue = e.target.value}
        if (e.target.id === 'hdd') {optBunny = e.target.value}
        if (e.target.id === 'ssd') {optBunny = e.target.value}
        if (e.target.id === 'multi') {optScaleway = e.target.value}
        if (e.target.id === 'single') {optScaleway = e.target.value}
    }
    resulting(storageValue, transferValue, optBunny, optScaleway)
    colour();
}
