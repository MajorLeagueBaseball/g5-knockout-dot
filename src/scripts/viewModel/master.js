/**
 *
 * @module viewModel/master
 * @description master viewModel
 * @author Greg Babula
 *
 */

'use strict';

const _            = require('lodash');
const ko           = require('knockout');
const util         = require('util');
const EventEmitter = require('events').EventEmitter;

/**
 *
 * @constructor MasterViewModel
 * @param {Object} opts
 * @param {String} opts.css classes added to main container
 * @param {Element} opts.container
 *
 */
function MasterViewModel(opts) {

    if (!(this instanceof MasterViewModel)) {
        return new MasterViewModel(opts);
    }

    this.opts = _.extend({
        css: 'g5-knockout-dot g5-knockout-component'
    }, opts);

    this.instance = false;
    this.active = false;

    //
    // storing all observables under a parent Object
    // this will help keep the viewModel clean, and help maintain
    // a clear separation between properties and observables
    //
    this.$data = {};

    //
    // used internally to determine if knockout
    // bindings have been correctly applied
    //
    this.koBound = false;

    EventEmitter.call(this);

}

util.inherits(MasterViewModel, EventEmitter);

/**
 *
 * @method init
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.init = function() {

    if (!this.instance) {

        this.instance = true;
        this.active = true;

        this.addG5Observables().addObservables();

    }

    return this;

};

/**
 *
 * @method addG5Observables
 * @description adds core observables provided by g5-knockout module
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.addG5Observables = function() {

    let $data = this.$data;

    util.log('g5-knockout : add core viewModel observables');

    $data.css = ko.observable(this.opts.css);
    $data.g5knockout_instance = ko.observable(this.instance);
    $data.g5knockout_visible = ko.observable(this.active);
    $data.g5knockout_bound = ko.observable(!!$data.g5knockout_instance());

    //
    // keeping this attr Object in the viewModel to keep markup clean
    //
    $data.g5knockout_attr = {
        'class': $data.css,
        'instance': $data.g5knockout_instance,
        'visible': $data.g5knockout_visible,
        'bound': $data.g5knockout_bound
    };

    //
    // if the observable is properly returning data, assume
    // that knockout bindings have been correctly applied
    //
    this.koBound = $data.g5knockout_bound() || false;

    return this;

};

/**
 *
 * @method addObservables
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.addObservables = function() {

    let $data = this.$data;

    $data.collection = ko.observable();

    return this;

};

/**
 *
 * @method reresh
 * @param {Object} data
 * @returns {Object} this
 * @description refreshes data on viewModel
 *
 */
MasterViewModel.prototype.refresh = function(data) {

    data = data || {};

    util.log('g5-knockout : refreshing data on viewModel');

    if (this.koBound) {
        this.$data.collection(data);
    }

    return this;

};

exports.MasterViewModel = MasterViewModel;
