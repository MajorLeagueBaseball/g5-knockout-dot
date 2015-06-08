/**
 *
 * @module index
 * @description g5-knockout-dot implementation example
 * @author Greg Babula
 *
 */

'use strict';

const g5KnockoutDot = require('./g5-knockout-dot').construct;

/**
 *
 * @function onLoad
 *
 */
function onLoad() {

    let linescoreComponent = g5KnockoutDot({
        container: document.getElementById('component--linescore'),
        css: 'linescore linescore--game',
        interval: 80000,
        path: '/src/data/linescore.json'
    });

    linescoreComponent.init();

}

window.onload = onLoad;
