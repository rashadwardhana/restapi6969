const response = require('../res/response');
const conn = require('../db/connection');

exports.getData = (req, res) => {
    conn.query('SELECT * FROM user', (err, result) => {
        if (err) return response.notOk(res, 'not found', 404);
        response.ok(res, result);
    });
};

exports.index = (req, res) => {
    res.send('Halo')
};