import {Component, OnDestroy, OnInit} from '@angular/core';
import {Video} from "../../_interfaces/video";
import { ActivatedRoute, Router } from '@angular/router';
import {ServerConnectorService} from "../../_services/server-connector.service";
import {Subscription} from "rxjs";

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
export class MediaComponent implements OnInit, OnDestroy {
    videoIDs: Array<Video>;
    sub: Subscription;
    player: YT.Player;
    private id: string;
    constructor(private route: ActivatedRoute, private router: Router, private service: ServerConnectorService) {
        // this.getVideos();
        // this.getYouTubeData();
    }
    ngOnInit() {
        this.sub = this.route
            .data
            .subscribe(d => console.log(d));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
    }
    onStateChange(event) {
        console.log('player state', event.data);
    }

    getYouTubeData(): void{
        this.service.getYoutubeData()
            .subscribe(v => console.log(v))
    }

    getVideos(): void {
        this.service.getVideosDetails()
            .subscribe(v => this.videoIDs = v);
    }

}
