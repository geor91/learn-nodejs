var User = require ('./modules/user');
var log = require('logger')(module);
var db = require('db');
    db.connect();

function init() {
    log(db.getPhrase('Run successful'));

    var mika = new User('Мика');
        mika.sayHello();
}

if (module.parent) {
    module.exports = init;
} else {
    init();
}