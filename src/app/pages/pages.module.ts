import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';


import { PagesRouteModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BoosterComponent } from '../components/booster/booster.component';
import { DoughnutgraphicComponent } from '../components/doughnutgraphic/doughnutgraphic.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graphics1Component,
    ProgressComponent,
    BoosterComponent,
    DoughnutgraphicComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent
  ],
  exports: [
    DashboardComponent,
    Graphics1Component,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PagesRouteModule,
    FormsModule,
    ChartsModule
  ]
})
export class PageModule { }
