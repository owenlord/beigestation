import {AfterContentInit, Component, OnInit, Input, Output} from '@angular/core';
import {defaultDimensions} from "./_services/youtube-api.service";

@Component({
  selector: 'app-youtube-live',
  template: `
    <div id="youtube-player">
        testing
    </div>
  `,
  styleUrls: ['./youtube-live.component.css']
})
export class YoutubeLiveComponent implements OnInit, AfterContentInit {
  @Input() videoId = '';
  @Input() height = defaultDimensions.height;
  @Input() width = defaultDimensions.width;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){

  }

}
