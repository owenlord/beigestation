import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {NavigationComponent} from './_components/navigation/navigation.component';
import {FooterComponent} from './_components/footer/footer.component';
import {MainComponent} from './_components/main/main.component';
import {MediaComponent} from "./_components/media/media.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {YoutubeLiveModule} from "./_modules/youtube-live/youtube-live.module";
import {AppRoutingModule} from './_modules/app-routing/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        MainComponent,
        MediaComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        YoutubeLiveModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);
