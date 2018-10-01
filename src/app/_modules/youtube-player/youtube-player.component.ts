import {AfterContentInit, Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {defaultDimensions} from "./_services/youtube-api.service";
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
export class YoutubePlayerComponent implements OnInit, AfterContentInit {
    @Input() videoId = '';
    @Input() height = defaultDimensions.height;
    @Input() width = defaultDimensions.width;

    @Output() ready = new EventEmitter();
    // state change: send the YT event with its state
    @Output() change = new EventEmitter();

    constructor(
        private service: YoutubeApiService
    ) {
    }

    ngOnInit() {
        this.service.loadPlayer();
    }

    ngAfterContentInit() {

    }

}
