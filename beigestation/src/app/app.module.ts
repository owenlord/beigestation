import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './_components/navigation/navigation.component';
import {FooterComponent} from './_components/footer/footer.component';
import {MainComponent} from './_components/main/main.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
