/**
 *
 * @module index
 * @description g5-knockout-dot implementation example
 * @author Greg Babula
 *
 */

'use strict';

const util          = require('util');
const g5KnockoutDot = require('./g5-knockout-dot').construct;

/**
 *
 * @function attachEvents
 *
 */
function attachEvents(component) {

    /**
     *
     * @event ready
     * @param {Object} constructor
     *
     */
    component.on('ready', function(constructor) {

        util.log('component model and viewModel have been initiated');
        // util.log(constructor);

    });

    /**
     *
     * @event data
     * @param {Object} data
     *
     */
    component.on('data', function(data) {

        util.log('component data from model');
        // util.log(data);

    });

    /**
     *
     * @event data-error
     * @param {Object} err
     *
     */
    component.on('data-error', function(err) {

        util.log('component model data error');
        // util.log(err);

    });

}

/**
 *
 * @function onLoad
 *
 */
function onLoad() {

    let linescoreComponent = g5KnockoutDot({
        container: document.getElementById('component--linescore'),
        css: 'linescore linescore--game',
        interval: 15000,
        path: '/src/data/linescore.json'
    });

    // attach events before init
    attachEvents(linescoreComponent);

    // init component
    linescoreComponent.init();

}

window.onload = onLoad;
