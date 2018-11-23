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
    OnDestroy, Renderer2
} from '@angular/core';
import {defaultDimensions} from "../_services/youtube-api.service";
import {YoutubeApiService} from "../_services/youtube-api.service";

@Component({
    selector: 'youtube-player',
    template: `
        <div id="youtube-player">
        </div>
    `,
    styleUrls: ['./youtube-player.component.sass']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy, AfterContentInit {
    @Input() videoId = '';
    @Input() height = defaultDimensions.height;
    @Input() width = defaultDimensions.width;

    @Input() protocol: string = this.getProtocol();
    @Input() playerVars: any;

    @Output() ready = new EventEmitter();
    // state change: send the YT event with its state
    @Output() change = new EventEmitter();

    player;

    constructor(private service: YoutubeApiService, private renderer: Renderer2) {
    }

    ngAfterContentInit() {
        const container  = this.renderer.selectRootElement('#youtube-player');
        console.log(container);
        this.service.loadPlayer({protocol: this.protocol})
        (<any>window).onYouTubeIframeAPIReady = () => {
            this.player = new (<any>window).YT.Player('youtube-player', {
                height: this.height,
                width: this.width,
                videoId: this.getVideo(),
                events: {
                    'onReady': this.onPlayerReady,
                    'onStateChange': this.onPlayerStateChange
                },
                playerVars: {'autoplay': 1, 'rel': 0, 'controls': 2},
            });
        };
    }

    ngOnInit() {
        const doc = (<any>window).document;
        const tag = doc.createElement('script');
        tag.type = 'text/javascript';
        tag.src = 'http://www.youtube.com/iframe_api';
        doc.body.appendChild(tag);
        console.log(this.videoId);
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
        this.videoId = '';
        console.log('destroyed', this.player);
    }

}
