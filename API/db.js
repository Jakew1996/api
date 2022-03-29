const mysql = require('mysql');
const async = require('async');

let state = {
    pool: null,
    mode: null
}

exports.connect = function (mode, done) {
    state.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'supermarketitems'
    });
    done();
}

exports.get = function () {
    return state.pool;
}