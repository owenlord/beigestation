import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YoutubeLiveComponent} from "./youtube-live.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      YoutubeLiveComponent
  ],
    exports:[
        YoutubeLiveComponent
    ]
})
export class YoutubeLiveModule { }
