import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    AfterContentInit,
    ElementRef,
    OnChanges,
    SimpleChanges,
    OnDestroy,
} from '@angular/core';

@Component({
    selector: 'youtube-player',
    template: `
        <div id="youtube-player"></div>
    `,
    styleUrls: ['./youtube-player.component.sass']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy, AfterContentInit {
    @Input() videoId = 'tUdQ-33k2tw';
    @Input() height = 270;
    @Input() width = 367;
    @Input() protocol: string = this.getProtocol();
    @Input() playerVars: any;

    @Output() ready = new EventEmitter();
    // state change: send the YT event with its state
    @Output() change = new EventEmitter();

    player;

    ngAfterContentInit() {
        (<any>window).onYouTubeIframeAPIReady = () => {
            this.player = new (<any>window).YT.Player('youtube-player', {
                height: this.height,
                width: this.width,
                videoId: this.getVideo(),
                events: {
                    'onReady': this.onPlayerReady,
                    'onStateChange': this.onPlayerStateChange
                },
                playerVars: {'autoplay': 1, 'rel': 0, 'controls': 2, 'origin':'http://localhost:4200'},
            });
        };
    }

    ngOnInit() {
        const doc = (<any>window).document;
        const tag = doc.createElement('script');
        tag.type = 'text/javascript';
        tag.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(tag);
    }

    // The API calls this function when the player's state changes.
    onPlayerStateChange(event) {
        console.log('onPlayerStateChange');
        console.log(event.data);
    }

    // The API will call this function when the video player is ready
    onPlayerReady(event) {
        const videoId = this.getVideo();
        event.target.cueVideoById({
            'videoId': videoId
        });
        event.target.playVideo();
    }

    getProtocol() {
        const hasWindow = window && window.location;
        const protocol = hasWindow
            ? window.location.protocol.replace(':', '')
            : 'http';
        return protocol;
    }

    getVideo() {
        return this.videoId;
    }

    ngOnDestroy(){
        this.player.destroy();
        this.player = {};
        this.videoId = '';
    }

}
