/**
 * Using the template engine to render the values into the template
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        //res.render(viewName, res.tpl);
        console.log('render: ' + viewName);
        res.render(viewName, res);
        //res.end('Template: ' + viewName);
    };

};
