import {Injectable} from '@angular/core';
import {Video} from "../_interfaces/video";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {VIDEOS} from "../videos/videos";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServerConnectorService {
    private youtubeURL = 'https://www.googleapis.com/youtube/v3/channelSections?part=id%2C+snippet%2C+contentDetails&channelId=UCiHlfB-Gnx02tf3dMxi8SsA&key=`
    private url: string = 'https://swapi.co/api/planets';
    private searchUrl: string = 'https://swapi.co/api/planets/?search=';

    getVideosDetails(): Observable<Video[]> {
        return of(VIDEOS);
    }

    getPlanets() {
        return this.http.get(this.url);
    }

    getYoutubeData(){
        return this.http.get(this.youtubeURL);
    }

    searchPlanets(name: string): Observable<HttpResponse<any>>{
        return this.http.get<any>(this.searchUrl + name, {observe: 'response'});
    }

    constructor(private http: HttpClient) {
        Observable.create((obs) => {
            obs.next('val I passed')
        }).subscribe({
            next: function (v) {
                console.log(v)
            }
        })
    }
}
