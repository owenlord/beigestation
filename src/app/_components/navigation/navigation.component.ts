import {Component, OnInit} from '@angular/core';
import {Link} from '../../_interfaces/link';

@Component({
    selector: 'app-navigation',
    template: `
        <nav>
            <div class="brand">
                {{title}}
            </div>
            <div class="list-links">
                <ul>
                    <li *ngFor="let link of links">
                        <a routerLink="">{{link.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="social">
                social media links
            </div>
        </nav>
    `,
    styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
    public title: string = 'beigestation';
    public links: Array<Link>;

    constructor() {
        this.title = this.title.toUpperCase();
    }

    ngOnInit() {
        this.links = [
            {name: 'LIVE', url: '/live'},
            {name: 'SHOP', url: '/shop'},
            {name: 'ABOUT', url: '/about'},
        ];
    }

}
