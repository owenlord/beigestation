import {Injectable} from '@angular/core';
import {Video} from "../_interfaces/video";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {VIDEOS} from "../videos/videos";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServerConnectorService {
    private url: string = 'https://swapi.co/api/planets';
    private searchUrl: string = 'https://swapi.co/api/planets/?search=';
    public test: Observable<any>;

    getVideos(): Observable<Video[]> {
        return of(VIDEOS);
    }

    getPlanets() {
        return this.http.get(this.url);
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
