import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ServerConnectorService} from "../../_services/server-connector.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit, OnDestroy {
    sub: Subscription;
    public id = null;
    constructor(private route: ActivatedRoute, private router: Router, private service: ServerConnectorService) {
    }
    ngOnInit() {
        this.sub = this.route
            .queryParams
            .subscribe(d => this.id = d.videoId);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        this.id = null;
    }

}
