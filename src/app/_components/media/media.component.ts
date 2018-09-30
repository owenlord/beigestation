import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-media',
    template: `
        <div class="media-container">
            <youtube-player
                    [videoId]="12345"
                    [height]="200"
                    [width]="200"
            ></youtube-player>
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
