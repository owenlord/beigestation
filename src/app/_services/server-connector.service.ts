import {Injectable} from '@angular/core';
import {Video} from "../_interfaces/video";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {VIDEOS} from "../videos/videos";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServerConnectorService {
    private _youtubeURL = 'http://localhost:4000/api/videos';
    private _rawVideosData: any;

    getVideosDetails(){
        return this.http.get(this._youtubeURL);
    }

    constructor(private http: HttpClient) {
    }
}