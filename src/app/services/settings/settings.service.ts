import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  localId: string = `DataConfig`;
  data: DataConfiguration = {
    urlTheme: `assets/css/colors/default-dark-theme.css`,
    idTheme: `default-dark-theme`
  }


  constructor() {
    this.loadDataConfig();
  }

  public saveDataConfig(): void {
    localStorage.setItem(this.localId, JSON.stringify(this.data));
    this.setSettings();
  }

  public loadDataConfig(): void{
    const data = localStorage.getItem(this.localId);
    if (data !== null) {
      this.data = JSON.parse(data);
    }
    this.setSettings();
  }

  public updateData(pIdTheme: string): void {
    const idTheme: string = pIdTheme;
    const urlTheme: string = `assets/css/colors/${idTheme}.css`;
    this.data.idTheme = idTheme;
    this.data.urlTheme = urlTheme;
    this.saveDataConfig();
  }

  setSettings() {
    const style: any = document.getElementById(`currentTheme`);
    style.href = this.data.urlTheme;
  }
}

interface DataConfiguration {
  urlTheme: string;
  idTheme: string;
}
