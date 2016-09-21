var stockRepository = require('./StockRepository');
var authenticator = require('./Authenticator');

var app = require("./app")(stockRepository, authenticator);

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});