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
            ></youtube-player>
        </div>
    `,
    styleUrls: ['./media.component.sass']
})
export class MediaComponent implements OnInit, OnDestroy {
    sub: Subscription;
    public id: string;
    constructor(private route: ActivatedRoute, private router: Router, private service: ServerConnectorService) {
    }
    ngOnInit() {
        console.log(this.route);
        this.sub = this.route
            .queryParams
            .subscribe(d => this.id = d.videoId);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        this.id = "";
    }

}
