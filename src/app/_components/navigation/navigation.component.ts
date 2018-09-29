import {Component, OnInit} from '@angular/core';
import {Link} from '../../_interfaces/link';
import {faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Icons} from "../../_interfaces/icons";

@Component({
    selector: 'app-navigation',
    template: `
        <nav>
            <div class="brand">
                <span>{{title}}</span>
            </div>
            <div class="list-links">
                <ul>
                    <li *ngFor="let link of links">
                        <a routerLink="">{{link.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="social">
                <a *ngFor="let link of sociLinks" routerLink="">
                    <fa-icon [icon]="link.icon"></fa-icon>
                </a>
            </div>
        </nav>
    `,
    styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
    public title: string = 'beigestation';
    public links: Array<Link>;
    public sociLinks: Array<Icons>;
    faYoutube = faYoutube;
    faInstagram = faInstagram;

    constructor() {
        this.title = this.title.toUpperCase();
    }

    ngOnInit() {
        this.sociLinks = [
            {url: '', icon: this.faYoutube},
            {url: '', icon: this.faInstagram},
        ];
        this.links = [
            {name: 'LIVE', url: '/live'},
            {name: 'SHOP', url: '/shop'},
            {name: 'ABOUT', url: '/about'},
        ];
    }

}
