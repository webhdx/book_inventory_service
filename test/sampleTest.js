var request = require('supertest');
var assert = require('assert');

describe('Stock inventory', function () {
    it('allows adding stock to inventory', function (done) {
        var repository = require('../lib/InMemoryRepository')();
        repository._items([{isbn: '1234', count: 1}]);
        var app = require('../lib/app')(repository);

        request(app)
            .post('/stock')
            .send({isbn: 323131, count: 10})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                isbn: 323131,
                count: 10
            }, done);
    });
    it('allows to check book availability', function (done) {
        var repository = require('../lib/InMemoryRepository')();
        repository._items([{isbn: '1234', count: 1}]);
        var app = require('../lib/app')(repository);

        request(app)
            .get('/stock/1234')
            .expect(200, '1', done);
    });
});

