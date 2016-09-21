var request = require('supertest');
var assert = require('assert');
var alawaysAuthenticatedAuthenticator = require('../lib/AlwaysAuthenticatedAuthenticator');

describe('Stock inventory', function () {
    it('checks login with invalid credentials', function (done) {
        var repository = require('../lib/InMemoryRepository')();
        var basicAuthAuthenticator = require('../lib/Authenticator');
        var app = require('../lib/app')(repository, basicAuthAuthenticator);

        request(app)
            .get('/')
            .expect(401, done);
    });
    it('allows adding stock to inventory', function (done) {
        var repository = require('../lib/InMemoryRepository')();
        repository._items([{isbn: '1234', count: 1}]);
        var app = require('../lib/app')(repository, alawaysAuthenticatedAuthenticator);

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
        var app = require('../lib/app')(repository, alawaysAuthenticatedAuthenticator);

        request(app)
            .get('/stock/1234')
            .set('Accept', 'application/json')
            .expect(200, '1', done);
    });
});

