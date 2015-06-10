/**
 *
 * @module g5-knockout-dot
 * @author Greg Babula
 * @description component base with KnockoutJS and doT templating
 *
 */

'use strict';

const _                   = require('lodash');
const ko                  = require('knockout');
const util                = require('util');
const MasterModel         = require('./model/master').MasterModel;
const MasterViewModel     = require('./viewModel/master').MasterViewModel;
const KOTemplateEngine    = require('./util/KOTemplateEngine');
const EventEmitter        = require('events').EventEmitter;
const EventTower          = require('./events/master').EventTower;

/**
 *
 * @function G5KnockoutDot
 * @param {Object} opts
 *
 */
function G5KnockoutDot(opts) {

    if (!(this instanceof G5KnockoutDot)) {
        return new G5KnockoutDot(opts);
    }

    this.opts = _.extend({
        container: undefined,
        i18n: 'en'
    }, opts);

    this.container = this.opts.container;
    this.dotTemplateEngine = new ko.dotTemplateEngine();

    this.model = MasterModel(this.opts);
    this.viewModel = MasterViewModel(this.opts);
    this.eventTower = EventTower(this);

    EventEmitter.call(this);

}

util.inherits(G5KnockoutDot, EventEmitter);

/**
 *
 * @method init
 *
 */
G5KnockoutDot.prototype.init = function() {

    util.log('g5-knockout : init');

    this.model.init();
    this.viewModel.init();

    ko.setTemplateEngine(this.dotTemplateEngine);
    ko.applyBindings(this.viewModel, this.container);

    this.emit('ready', this);

};

exports.construct = G5KnockoutDot;
