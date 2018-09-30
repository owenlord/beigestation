import { Injectable } from '@angular/core';

export function window() {
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

  constructor() { }
}
