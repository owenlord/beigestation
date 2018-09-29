import {Component, OnInit} from '@angular/core';
import {faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Icons} from "../../_interfaces/icons";

@Component({
    selector: 'app-footer',
    template: `
        <footer>
            <div>
                <h1>{{title}}</h1>
            </div>
            <div class="social">
                <a *ngFor="let link of sociLinks" routerLink="">
                    <fa-icon [icon]="link.icon"></fa-icon>
                </a>
            </div>
        </footer>
    `,
    styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
    title: string = 'beigestation';
    faYoutube = faYoutube;
    faInstagram = faInstagram;
    public sociLinks: Array<Icons> = [
        {url: '', icon: this.faYoutube},
        {url: '', icon: this.faInstagram},
    ]

    constructor() {
    }

    ngOnInit() {
        this.title = this.title.toUpperCase();
    }

}
