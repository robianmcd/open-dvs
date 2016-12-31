let express = require('express');
let app = express();
let path = require('path');

//Enable gzip
let compress = require('compression');
app.use(compress());

app.use(express.static(path.join(__dirname, 'dist')));

app.all('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});

let server = app.listen(process.env.PORT || 5000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});