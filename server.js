const express = require('express'),
    path = require('path'),
    conf = require('./server/config'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    PORT =  process.env.PORT || 4000,
    app = express(),
    routes = require('./server/routes/index');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.use('/api', routes);
app.use(express.static(__dirname + '/dist/beigestation'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/beigestation')));

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
