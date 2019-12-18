const response = require('../res/response');
const conn = require('../db/connection');

exports.getData = (req, res) => {
    response.ok(res, { message: 'success' });
};

exports.index = (req, res) => {
    res.send('Halo')
};

exports.ha = (req, res) => {
    conn.query('INSERT INTO user VALUES ?, ?, ?, ?, ?', [req.query.id, req.query.username, req.query.firstname, req.query.lastname, req.query.privilege], (err, result) => {
        if (err) return res.send(err);
        res.send('good');
    })
}