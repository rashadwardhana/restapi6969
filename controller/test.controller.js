const response = require('../res/response');
const conn = require('../db/connection');

exports.getData = (req, res) => {
    response.ok(res, { message: 'success' });
};

exports.index = (req, res) => {
    res.send('Halo')
};

exports.ha = (req, res) => {
    conn.query('CREATE TABLE user ( id INT PRIMARY KEY, username VARCHAR(50), firstname VARCHAR(50), lastname VARCHAR(50), privilege INT )', (err, result) => {
        if (err) return res.send('error');
        res.send('sukses');
    });
}