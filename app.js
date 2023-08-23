const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    console.log('Server is responding to front end')
});



app.get('/login', function (req, res) {
    console.log('WARNING : LOGIN PAGE ACCESSED');
    return res.send('Welcome to Login Page');
});

app.listen(process.env.PORT || 9000, () => console.log('Arjun K, running on Port 9000'));


// app.listen(3000,
//     () => console.log('Server listening on port 3000.'));