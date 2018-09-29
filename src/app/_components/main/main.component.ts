import {Component, OnInit} from '@angular/core';
import {Panel} from "../../_interfaces/panel";
import { faCaretRight} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-main',
    template: `
        <div class="main-container">
            <div *ngFor="let panel of panels" class="panel" ngClass="{{panel.style}}">
                <div>
                    <span>
                        <h1>
                            {{panel.title}}
                        </h1>
                        <p>{{panel.paragraph}}</p>
                        <span>
                            <a href="">WATCH LIVE</a>
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
    constructor() {
    }

    ngOnInit() {
        this.panels = [
            {title: 'Hot Nugs', paragraph: 'Cum and watch some hot nugs dance', backgroundImg: 'url', url: 'url', style: 'one'},
            {title: 'Sexy Pasts', paragraph: 'These pasts will wow you', backgroundImg: 'url', url: 'url', style: 'two'},
            {title: 'Crispy Chris', paragraph: 'Chris is a genius', backgroundImg: 'url', url: 'url', style: 'three'},
            {title: 'Merch', paragraph: 'Get you merch!', backgroundImg: 'url', url: 'url', style: 'merch'}
        ]
    }
}
