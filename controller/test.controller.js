const response = require('../res/response');
const conn = require('../db/connection');

exports.getData = (req, res) => {
    response.ok(res, { message: 'success' });
};

exports.index = (req, res) => {
    res.send('Halo')
};