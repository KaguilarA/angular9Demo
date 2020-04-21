import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      tittle: `Principal`,
      icon: `mdi mdi-gauge`,
      submenu: [
        {
          tittle: `Dashboard`,
          url: `/dashboard`
        },
        {
          tittle: `Progress`,
          url: `/progress`
        },
        {
          tittle: `Gráficos`,
          url: `/graphics1`
        }
      ]
    }
  ];

  constructor() { }
}
