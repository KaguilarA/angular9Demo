import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PagesRouteModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graphics1Component,
    ProgressComponent
  ],
  exports: [
    DashboardComponent,
    Graphics1Component,
    ProgressComponent
  ],
  imports: [
    PagesRouteModule,
    SharedModule
  ]
})
export class PageModule { }
