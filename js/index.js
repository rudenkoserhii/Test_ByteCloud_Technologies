import { formula } from './data.js';
import { refs } from './refs.js';
import { dimensionX, dimensionY } from './orientation.js';
refs.inputStorage.addEventListener('input', onChange);
refs.inputTransfer.addEventListener('input', onChange);
refs.optionsBunny.forEach(opt => opt.addEventListener('click', onChange));
refs.optionsScaleway.forEach(opt => opt.addEventListener('click', onChange));
onChange();
import { onChange } from './onChange.js';
import { resulting } from './resulting.js';
import { colour } from './colour.js';
import { result } from './result.js';









