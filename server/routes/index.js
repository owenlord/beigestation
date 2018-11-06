//https://www.googleapis.com/youtube/v3/search?key={your key}&channelId=UCiHlfB-Gnx02tf3dMxi8SsA&part=snippet,id&order=date&maxResults=20
require('dotenv').load();
let express = require('express'),
    channelId = 'channelId=UCiHlfB-Gnx02tf3dMxi8SsA',
    url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&${channelId}&part=snippet,id&order=date&maxResults=20`,
    cors = require('cors'),
    conf = require('../config'),
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
                parsed = parsed.items.map(item => {
                    return {
                        id: item.snippet.title,
                        title: item.snippet.title,
                        videoID: item.id.videoId,
                        paragraph: item.snippet.description,
                        backgroundImg: item.snippet.thumbnails.high,
                        linkName: item.snippet.title,
                        liveNow: false,
                        url: '',
                        style: ''
                    }
                });
                res.send(parsed);
            }
        });
    })
    .post((req, res, next) => {
        console.log(req.body);
    });
module.exports = router;