import {AfterContentInit, Component, OnInit, Input, Output} from '@angular/core';

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
  @Input() height = 200;
  @Input() width = 200;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){

  }

}
