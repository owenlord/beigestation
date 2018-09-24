import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../_components/main/main.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    }
    // {
    //     path: '...',
    //     component: ...
    // }
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
