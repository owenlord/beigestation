import {Injectable} from '@angular/core';
import {Video} from "../_interfaces/video";
import {VIDEOS} from "../videos/videos";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServerConnectorService {

    getVideos(): Observable<Video[]> {
        return of(VIDEOS);
    }

    constructor() {
    }
}
