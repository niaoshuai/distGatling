import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MODULE_COMPONENTS, MODULE_ROUTES} from './dashboard.routes';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [MODULE_COMPONENTS]
})

export class DashboardModule {
}
