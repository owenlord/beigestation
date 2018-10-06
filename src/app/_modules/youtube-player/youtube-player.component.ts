import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {defaultDimensions, wind} from "./_services/youtube-api.service";
import {Subscription} from "rxjs";
import {YoutubeApiService} from "./_services/youtube-api.service";

@Component({
    selector: 'youtube-player',
    template: `
        <div id="youtube-player">
            testing
        </div>
    `,
    styleUrls: ['./youtube-player.component.sass']
})
export class YoutubePlayerComponent implements OnInit, AfterViewInit {
    @Input() videoId = '';
    @Input() height = defaultDimensions.height;
    @Input() width = defaultDimensions.width;

    @Output() ready = new EventEmitter();
    // state change: send the YT event with its state
    @Output() change = new EventEmitter();

    player;
    public videoID:string = 'wmin5WkOuPw';
    private apiLoaded = false;

    constructor(private service: YoutubeApiService) { }

    ngAfterViewInit() {
        const doc = (<any>window).document;
        if (!this.apiLoaded) {
            this.apiLoaded = true;
            const tag = doc.createElement('script');
            tag.type = 'text/javascript';
            tag.src = 'https://www.youtube.com/iframe_api';
            doc.body.appendChild(tag);
        }
    }

    ngOnInit() {
        (<any>window).onYouTubeIframeAPIReady = () => {
            this.player = new (<any>window).YT.Player('youtube-player', {
                height: '450px',
                width: '100%',
                videoId: this.getVideo(),
                events: {
                    'onReady': this.onPlayerReady,
                    'onStateChange': this.onPlayerStateChange
                },
                playerVars: {'autoplay': 1, 'rel': 0, 'controls': 2},
            });
        };
    }



    // The API calls this function when the player's state changes.
    onPlayerStateChange(event) {
        console.log('onPlayerStateChange');
        console.log(event.data);
    }

    // The API will call this function when the video player is ready
    onPlayerReady(event) {
        console.log(event);

        const videoId = this.getVideo();
        event.target.cueVideoById({
            'videoId': videoId
        });
        event.target.playVideo();
    }

    getVideo() {
        return this.videoID;
    }

}
