import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YoutubePlayerComponent} from "./_components/youtube-player.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      YoutubePlayerComponent
  ],
    exports:[
        YoutubePlayerComponent
    ]
})
export class YoutubePlayerModule { }
