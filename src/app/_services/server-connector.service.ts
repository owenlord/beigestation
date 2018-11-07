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

    get getVideosDetails() {
        return this._rawVideosData;
    }

    set videosData(v: any) {
        this._rawVideosData = v;
    }

    getYoutubeData(){
        return this.http.get(this._youtubeURL).subscribe(d => {
            console.log(d);
            this.videosData = d;
        })
    }

    constructor(private http: HttpClient) {
        console.log('test');
        this.getYoutubeData();
        // Observable.create((obs) => {
        //     obs.next('val I passed')
        // }).subscribe({
        //     next: function (v) {
        //         console.log(v)
        //     }
        // });
    }
}
