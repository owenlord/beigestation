import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../../_components/main/main.component';
import {MediaComponent} from "../../_components/media/media.component";
import {ServerConnectorService} from "../../_services/server-connector.service";

const appRoutes: Routes = [
    {
        path: '',
        resolve: {
            loadVideoDetails: ServerConnectorService
        },
        component: MainComponent
    },
    {
        path: 'video/:videoId',
        component: MediaComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
