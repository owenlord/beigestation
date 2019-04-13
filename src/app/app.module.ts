import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {NavigationComponent} from './_components/navigation/navigation.component';
import {FooterComponent} from './_components/footer/footer.component';
import {MainComponent} from './_components/main/main.component';
import {VideoComponent} from "./_components/video/video.component";
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {YoutubePlayerModule } from "./_modules/youtube-player/youtube-player.module";
import {HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './_modules/app-routing/app-routing.module';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        MainComponent,
        VideoComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        YoutubePlayerModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);
