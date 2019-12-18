const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'mysql://bfd3914cafdd2f:beddc215@us-cdbr-iron-east-05.cleardb.net/heroku_75c1383773f3253?reconnect=true',
    user: 'bfd3914cafdd2f',
    password: 'beddc215',
    database: 'heroku_75c1383773f3253'
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;