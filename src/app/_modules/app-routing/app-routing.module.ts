import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../../_components/main/main.component';
import {MediaComponent} from "../../_components/media/media.component";

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'live/:id',
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
