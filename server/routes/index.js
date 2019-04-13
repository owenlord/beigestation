//https://www.googleapis.com/youtube/v3/search?key={your key}&channelId=UCiHlfB-Gnx02tf3dMxi8SsA&part=snippet,id&order=date&maxResults=20
require('dotenv').load();
let express = require('express'),
    channelId = 'channelId=UC2hl9xJ9ol2Yb6XDI2XwEyA',
    url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&${channelId}&part=snippet,id&order=date&maxResults=20`,
    cors = require('cors'),
    conf = require('../config'),
    videoController = require('../controllers/ApiVideoController');
    request = require('request'),
    router = express.Router(),
    app = express();

router.route('/')
    .get((req, res, next) => {
        res.send('API');
    });

router.route('/videos')
    .get((req, res, next) => {
        request({
            uri: url,
            method: 'GET'
        }, function(error, response, body) {
            if(error){
                res.send('There was an error', response.statusCode)
                return false;
            }
            if(!error && response.statusCode == 200){
                let parsed = JSON.parse(body);
                parsed = videoController.videoDetailsResp(parsed);
                res.send(parsed);
            }
        });
    })
    .post((req, res, next) => {
        console.log(req.body);
    });
module.exports = router;