let express = require('express'),
    cors = require('cors'),
    conf = require('../config'),
    router = express.Router(),
    app = express();

router.route('/')
    .get((req, res, next) => {
        res.send('API');
    });

router.route('/hello')
    .get((req, res, next) => {
        res.send('Hello');
    })
    .post((req, res, next) => {
        console.log(req.body);
    });
module.exports = router;