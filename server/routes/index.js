//https://www.googleapis.com/youtube/v3/search?key={your key}&channelId=UCiHlfB-Gnx02tf3dMxi8SsA&part=snippet,id&order=date&maxResults=20
require('dotenv').load();
let express = require('express'),
    channelId = 'channelId=UCiHlfB-Gnx02tf3dMxi8SsA',
    url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&${channelId}&part=snippet,id&order=date&maxResults=20`,
    cors = require('cors'),
    conf = require('../config'),
    http = require('http'),
    router = express.Router(),
    app = express();

router.route('/')
    .get((req, res, next) => {
        res.send('API');
    });

router.route('/videos')
    .get((req, res, next) => {
        res.send(JSON.stringify({ a: 1 }));
        res.send(process.env.YOUTUBE_API_KEY);
        http.request({
            host: url,
            method: 'GET'
        }, function(res) {
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
        }).end();
    })
    .post((req, res, next) => {
        console.log(req.body);
    });
module.exports = router;