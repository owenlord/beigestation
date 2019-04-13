import {Component, OnInit} from '@angular/core';
import {Link} from '../../_interfaces/link';
import {faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Icons} from "../../_interfaces/icons";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
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
