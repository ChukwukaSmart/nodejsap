const express = require('express');
const app = express();
const port = 4000

app.get('/', (req, res) => {
    res.send( 'Welcome to ForsageGroup' );
});

app.listen(port, () => {
    console.log( 'Server is running on port ${port}' );
});