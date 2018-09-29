import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './_components/navigation/navigation.component';
import {FooterComponent} from './_components/footer/footer.component';
import {MainComponent} from './_components/main/main.component';
import {MediaComponent} from "./_components/media/media.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from './app-routing/app-routing.module';

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
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
