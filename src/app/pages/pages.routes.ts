import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../guards/guards.index';


const pagesRoutes: Routes = [
  {
    path: ``,
    component: PagesComponent,
    canActivate: [ LoginGuard ],
    children: [
      { path: `dashboard`, component: DashboardComponent, data: { title: `Dashboard` } },
      { path: `progress`, component: ProgressComponent, data: { title: `Barras de Progreso` } },
      { path: `graphics1`, component: Graphics1Component, data: { title: `Gráficas` } },
      { path: `promises`, component: PromisesComponent, data: { title: `Promesas` } },
      { path: `rxjs`, component: RxjsComponent, data: { title: `Subscriber` } },
      { path: `account-settings`, component: AccountSettingsComponent, data: { title: `Temas` } },
      { path: ``, redirectTo: `/dashboard`, pathMatch: `full` }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})

export class PagesRouteModule { }
