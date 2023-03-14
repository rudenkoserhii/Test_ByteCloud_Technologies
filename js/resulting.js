import { refs } from './refs.js';
import { result } from './result.js';
import { dimensionX, dimensionY } from './orientation.js';

export function resulting(storageValue, transferValue, optBunny, optScaleway) {
    refs.answerBackblaze.innerText = Math.round(result('backblaze', storageValue, transferValue)).toFixed(2);
    refs.answerBunny.innerText = Math.round(result('bunny', storageValue, transferValue, optBunny)).toFixed(2);
    refs.answerScaleway.innerText = Math.round(result('scaleway', storageValue, transferValue, optScaleway)).toFixed(2);
    refs.answerVultr.innerText = Math.round(result('vultr', storageValue, transferValue)).toFixed(2);

    refs.answerRangeBackblaze.style[`${dimensionX}`] = `${result('backblaze', storageValue, transferValue)*5}px`;
    refs.answerRangeBackblaze.style[`${dimensionY}`] = '60px';

    refs.answerRangeBunny.style[`${dimensionX}`] = `${result('bunny', storageValue, transferValue, optBunny)*5}px`;
    refs.answerRangeBunny.style[`${dimensionY}`] = '60px';

    refs.answerRangeScaleway.style[`${dimensionX}`] = `${result('scaleway', storageValue, transferValue, optScaleway)*5}px`;
    refs.answerRangeScaleway.style[`${dimensionY}`] = '60px';

    refs.answerRangeVultr.style[`${dimensionX}`] = `${result('vultr', storageValue, transferValue)*5}px`;
    refs.answerRangeVultr.style[`${dimensionY}`] = '60px';
}
