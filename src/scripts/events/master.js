/**
 *
 * @module events/master
 * @author Greg Babula
 *
 */

'use strict';

var _             = require('lodash');
var util          = require('util');
var EventEmitter  = require('events').EventEmitter;

/**
 *
 * @function hasEventEmitter
 * @param {Object} obj
 * @returns {Boolean}
 * @description returns true if given obj has an instance of EventEmitter
 *
 */
function hasEventEmitter(obj) {

    return obj && obj instanceof EventEmitter;

}

/**
 *
 * @constructor EventTower
 * @param {Object} model
 * @param {Object} viewModel
 * @description mediates events between model and viewModel
 *
 */
function EventTower(model, viewModel) {

    if (!(this instanceof EventTower)) {
        return new EventTower(model, viewModel);
    }

    this.model = model || {};
    this.viewModel = viewModel || {};

    //
    // ensure all targets have an instance of
    // EventEmitter before proceeding to attach events
    //
    if (hasEventEmitter(this.model) && hasEventEmitter(this.viewModel)) {
        this.attachEvents();
    }

}

/**
 *
 * @method attachEvents
 * @description core attachEvents method, single location for all events
 * @returns {Object} this
 *
 */
EventTower.prototype.attachEvents = function() {

    let _master = this.master;
    let _model = this.model;
    let _viewModel = this.viewModel;

    util.log('g5-knockout : add events');

    /**
     *
     * @event data
     * @param {Object} data
     *
     */
    _model.on('data', function(data) {

        _viewModel.emit('data-refresh', data);

    });

    /**
     *
     * @event data-error
     * @param {Object} err
     *
     */
    _model.on('data-error', function(err) {

        util.log('g5-knockout : error fetching model data :', err);

    });

    /**
     *
     * @event data-refresh
     * @param {Object} data
     *
     */
    _viewModel.on('data-refresh', function(data) {

        _viewModel.refresh(data);

    });

    return this;

};

exports.EventTower = EventTower;
