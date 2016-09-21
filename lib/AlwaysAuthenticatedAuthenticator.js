module.exports = function(username, password) {
    return function(req, res, next) {
        next();
    };
};