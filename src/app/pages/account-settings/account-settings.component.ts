import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public dataConfig: SettingsService) {
  }

  ngOnInit() {
    this.dataConfig.loadDataConfig();
    this.updateCheck();
  }

  changeCurrentTheme(pThemeId: string, pLink: any) {
    const idTheme: string = pThemeId;
    const link: any = pLink;
    this.dataConfig.updateData(idTheme);
    this.updateCheck();
  }

  updateCheck() {
    const elements = Array.from(document.getElementsByClassName(`selector`));
    for (const element of elements) {
      const currentElementId = element.getAttribute(`data-theme`);
      if (currentElementId === this.dataConfig.data.idTheme) {
        element.classList.add(`working`);
      } else {
        element.classList.remove(`working`);
      }
    }
  }

}
