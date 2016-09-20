var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_KEY);

configurator.export('bookinvsvc').then(function (result) {
    console.log(result);
});