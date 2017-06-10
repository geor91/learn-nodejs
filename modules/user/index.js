var log = require('logger')(module);
var db = require('db');

function User(name) {
    this.name = name;
}

User.prototype.sayHello = function () {
    log(db.getPhrase('Hello') + ', ' + this.name);
};

module.exports = User;
