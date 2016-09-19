var express = require('express'),
    bodyParser = require('body-parser');

module.exports = function(stockRepository) {
    var app = express(),
        middleware = require('./Middleware'),
        routes = require('./Routes')(stockRepository);

    app.use(bodyParser.json());

    app.get('/', routes.hello);
    app.post('/stock', routes.stockUp);
    app.get('/stock/:isbn', routes.getCount);
    app.get('/stock', routes.findAll);

    app.use(middleware.clientErrorHandler);
    app.use(middleware.serverErrorHandler);

    return app;
};