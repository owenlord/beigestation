import {Component, OnInit} from '@angular/core';
import {Video} from "../../_interfaces/video";
import {ServerConnectorService} from "../../_services/server-connector.service";
import { faCaretRight, faBroadcastTower} from "@fortawesome/free-solid-svg-icons";
import {Observable} from "rxjs";

@Component({
    selector: 'app-main',
    template: `
        <div class="main-container">
            <div *ngFor="let panel of panels" class="panel">
                <div>
                    <span>
                        <span *ngIf="panel.hasOwnProperty('liveNow')" [ngStyle]="{'color': panel.liveNow ? 'red' : 'inherit' }">
                            <fa-icon [icon]="faBroadcastTower"></fa-icon>
                            LIVE NOW
                        </span>
                        <h1>
                            {{panel.title}}
                        </h1>
                        <p>{{panel.paragraph}}</p>
                        <span>
                            <a [routerLink]="['/live', panel.id]" [queryParams] = "{videoId: panel.videoID }">
                                WATCH NOW
                                <fa-icon [icon]="faCaretRight"></fa-icon>
                            </a>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
    public panels: Array<Video>;
    faCaretRight = faCaretRight;
    faBroadcastTower = faBroadcastTower;
    constructor(private service: ServerConnectorService) {
    }

    ngOnInit() {
        this.service.getVideosDetails()
            .subscribe(v => {
                this.panels = v;
            })
    }
}
