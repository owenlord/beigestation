import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-media',
    template: `
        <div class="media-container">
            <app-youtube-live
                    [videoId]="12345"
                    [height]="200"
                    [width]="200"
            ></app-youtube-live>
        </div>
    `,
    styleUrls: ['./media.component.sass']
})
export class MediaComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
    }

}
