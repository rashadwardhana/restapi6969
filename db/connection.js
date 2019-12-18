const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net/',
    user: 'bfd3914cafdd2f',
    password: 'beddc215',
    database: 'heroku_75c1383773f3253'
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;