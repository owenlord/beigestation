import {Component, OnInit} from '@angular/core';
import {Panel} from "../../_interfaces/panel";
import { faCaretRight, faBroadcastTower} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-main',
    template: `
        <div class="main-container">
            <div *ngFor="let panel of panels" class="panel" ngClass="{{panel.style}}">
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
                            <a [routerLink]="['/live', panel.id]">
                                {{panel.linkName}}
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
    public panels: Array<Panel>;
    faCaretRight = faCaretRight;
    faBroadcastTower = faBroadcastTower;
    constructor() {
    }

    ngOnInit() {
        this.panels = [
            {id: 'nuggets', title: 'Hot Nugs', paragraph: 'Cum and watch some hot nugs dance', backgroundImg: 'url', linkName: 'WATCH NOW', url: 'url', liveNow: true, style: 'one'},
            {id: 'pasties', title: 'Sexy Pasts', paragraph: 'These pasts will wow you', backgroundImg: 'url', linkName: 'WATCH NOW', url: 'url', liveNow: false, style: 'two'},
            {id: 'crisps', title: 'Crispy Chris', paragraph: 'Chris is a genius', backgroundImg: 'url', linkName: 'WATCH NOW', url: 'url', liveNow: true, style: 'three'},
            {id: 'merch', title: 'Merch', paragraph: 'Get you merch!', backgroundImg: 'url', linkName: 'SHOP', url: 'url', style: 'merch'}
        ]
    }
}
