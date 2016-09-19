module.exports = function (StockRepository) {
    return {
        stockUp: function (req, res, next) {
            StockRepository.stockUp(req.body.isbn, req.body.count)
                .then(function () {
                    res.json({isbn: req.body.isbn, count: req.body.count});
                })
                .catch(next);
        },
        getCount: function (req, res, next) {
            StockRepository.getCount(req.params.isbn)
                .then(function (document) {
                    if (document) {
                        return res.json(document);
                    } else {
                        res.status(404).send("Document doesn't exist for ISBN " + req.params.isbn);
                    }
                })
                .catch(next);
        },
        findAll: function (req, res, next) {
            StockRepository.findAll()
                .then(function (results) {
                    res.json(results);
                })
                .catch(next);
        },
        hello: function (req, res) {
            res.send('Hello World!');
        }
    };
};