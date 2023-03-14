import { onChange } from './onChange.js';

    let dimensionX = '';
    let dimensionY = '';

    if (window.matchMedia("(orientation: portrait)").matches) {
        dimensionX = 'height';
        dimensionY = 'width';
    } else {
        dimensionX = 'width';
        dimensionY = 'height';
    }

    window.matchMedia("(orientation: portrait)").addEventListener("change", function(e) {
        if(e.matches) {
        dimensionX = 'height';
        dimensionY = 'width';
        } else {
        dimensionX = 'width';
        dimensionY = 'height';
        }
    onChange();
    })
export { dimensionX, dimensionY }