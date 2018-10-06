import {Injectable} from '@angular/core';

export function wind() {
    return window;
}

export const defaultDimensions = {
    height: 270,
    width: 367
};

@Injectable({
    providedIn: 'root'
})
export class YoutubeApiService {

    private apiLoaded = false;
    private youtubeApiUrl: string = "https://www.youtube.com/iframe_api";

    constructor() {
    }

    public loadPlayer() {
        const document = wind().document;
        if (!this.apiLoaded) {
            this.apiLoaded = true;
            const tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.src = this.youtubeApiUrl;
            document.body.appendChild(tag);
        }
    }
}
