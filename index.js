const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const testApiRouter = require('./routes/test.routes');

app.use('/api/v1', testApiRouter);

app.listen(port, () => {
    console.log('Server 6969 is running on port number 3000');
});