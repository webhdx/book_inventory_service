var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_KEY);
configurator.export('bookinvsvc').then(function (result) {
    console.log(result);
});

var prod = {
    name: 'bookinvsvc',
    organization: undefined,
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {MONGODB_URI: 'mongodb://heroku_c2ng6dvz:o5ga9i7lgftekc18d4hfp2i3aj@ds033996.mlab.com:33996/heroku_c2ng6dvz'},
    addons: {},
    collaborators: ['makb@jcommerce.pl', 'kontakt@mariuszangielski.pl'],
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: false},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false},
        'http-sni': {enabled: false},
        'app-alerting': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: [],
    domains: ['bookinvsvc.herokuapp.com']
};