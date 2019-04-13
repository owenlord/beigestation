import {Component, OnInit} from '@angular/core';
import {Video} from "../../_interfaces/video";
import {ServerConnectorService} from "../../_services/server-connector.service";
import { faCaretRight, faBroadcastTower} from "@fortawesome/free-solid-svg-icons";
import { Observable, from } from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
    public panels: Observable<Video[]>;
    faCaretRight = faCaretRight;
    faBroadcastTower = faBroadcastTower;
    constructor(private service: ServerConnectorService) {
    }

    ngOnInit() {
        this.panels = this.service.getVideosDetails();
    }
}
