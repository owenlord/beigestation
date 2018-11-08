exports.videoDetailsResp = function (data) {
    return data.items.map(item => {
        return {
            id: item.snippet.title,
            title: item.snippet.title,
            videoId: item.id.videoId,
            paragraph: item.snippet.description,
            backgroundImg: item.snippet.thumbnails.high,
            linkName: item.snippet.title,
            liveNow: false
        }
    });
};