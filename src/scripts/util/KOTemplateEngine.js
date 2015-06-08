/**
*
* @module KOTemplateEngine
*
*/

'use strict';

const ko  = require('knockout');
const doT = require('dot');

ko.dotTemplateEngine = function() {};

ko.dotTemplateEngine.prototype = ko.utils.extend(new ko.templateEngine(), {
    templates: {},
    renderTemplateSource: function(templateSource, bindingContext, options) {

        let data = bindingContext.$data;
        let templateId = options;
        let templateText = templateSource.text();
        let compiledTemplate = this.templates[templateId];

        //
        // only compile the template once on the client
        //
        if (compiledTemplate == null) {
            compiledTemplate = doT.template(templateText);
            this.templates[templateId] = compiledTemplate;
        }

        return ko.utils.parseHtmlFragment(compiledTemplate(data));

    },
    allowTemplateRewriting: false
});
