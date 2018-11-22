import {Component, OnInit} from '@angular/core';
import {Video} from "../../_interfaces/video";
import {ServerConnectorService} from "../../_services/server-connector.service";
import { faCaretRight, faBroadcastTower} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-main',
    template: `
        <div class="main-container">
            <div *ngFor="let panel of panels" class="panel" [style.backgroundImage]="'url(' + panel.backgroundImg.url + ')'">
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
                            <a [routerLink]="['/video', panel.videoId]" [queryParams] = "{videoId: panel.videoId }">
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
    public panels: Video[];
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
