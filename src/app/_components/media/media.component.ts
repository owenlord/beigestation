import {Component, OnInit} from '@angular/core';
import {Video} from "../../_interfaces/video";
import {ServerConnectorService} from "../../_services/server-connector.service";

@Component({
    selector: 'app-media',
    template: `
        <div class="media-container">
            <youtube-player
                    [videoId]="id"
                    (ready)="savePlayer($event)"
                    (change)="onStateChange($event)"
            ></youtube-player>
        </div>
    `,
    styleUrls: ['./media.component.sass']
})
export class MediaComponent implements OnInit {
    videoIDs: Array<Video>;
    player: YT.Player;
    private id: string = 'qDuKsiwS5xw';
    constructor(private service: ServerConnectorService) {
        this.getVideos();
    }
    savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
    }
    onStateChange(event) {
        console.log('player state', event.data);
    }

    getVideos(): void {
        this.service.getVideos()
            .subscribe(v => this.videoIDs = v);
    }


    ngOnInit() {
    }

}
