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
                        <span>
                            <fa-icon [icon]="faBroadcastTower"></fa-icon>
                            LIVE NOW
                        </span>
                        <h1>
                            {{panel.title}}
                        </h1>
                        <p>{{panel.paragraph}}</p>
                        <span>
                            <a href="">{{panel.linkName}}</a>
                            <fa-icon [icon]="faCaretRight"></fa-icon>
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
            {title: 'Hot Nugs', paragraph: 'Cum and watch some hot nugs dance', backgroundImg: 'url', linkName: 'WATCH NOW', url: 'url', style: 'one'},
            {title: 'Sexy Pasts', paragraph: 'These pasts will wow you', backgroundImg: 'url', linkName: 'WATCH NOW', url: 'url', style: 'two'},
            {title: 'Crispy Chris', paragraph: 'Chris is a genius', backgroundImg: 'url', linkName: 'WATCH NOW', url: 'url', style: 'three'},
            {title: 'Merch', paragraph: 'Get you merch!', backgroundImg: 'url', linkName: 'SHOP', url: 'url', style: 'merch'}
        ]
    }
}
