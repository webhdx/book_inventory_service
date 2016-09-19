var MongoClient = require('mongodb').MongoClient;

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/book_inventory_service';
var collectionPromise = MongoClient.connect(url, {
    db: {bufferMaxEntries:0}
}).then(function (db) {
    console.log('Connection to DB established');
    return db.collection('books_makb');
});

var StockRepository = {
    stockUp: function(isbn, count) {
        return collectionPromise
            .then(function (collection) {
                return collection.updateOne({"isbn": isbn}, {
                    "isbn": isbn,
                    "count": count
                }, {"upsert": true});
            });
    },
    getCount: function(isbn) {
        return collectionPromise
            .then(function(collection) {
                return collection.find({"isbn": isbn}).limit(1).next();
            })
            .then(function(document) {
                if(document) {
                    return document.count;
                } else {
                    return null;
                }
            });
    },
    findAll: function() {
        return collectionPromise
            .then(function(collection) {
                return collection.find({}).toArray();
            });
    }
};


module.exports = StockRepository;