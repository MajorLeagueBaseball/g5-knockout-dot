/**
 *
 * @module events-master
 * @description EventTower test
 * @author Greg Babula
 *
 */

'use strict';

var test          = require('tape');
var EventTower    = require('../src/scripts/events/master').EventTower;

test('events-master test', function(t) {

    t.plan(4);

    var eventTower = EventTower();

    t.ok(eventTower instanceof EventTower, 'should have instance of EventTower');

    t.equal(typeof eventTower.model, 'object');
    t.equal(typeof eventTower.viewModel, 'object');
    t.equal(typeof eventTower.attachEvents, 'function');

});
