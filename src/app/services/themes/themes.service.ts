import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class ThemesService {
  private _themeUrl: BehaviorSubject<string> = new BehaviorSubject(null);

  public themeUrl = this._themeUrl.asObservable().pipe(filter(theme => !!theme));

  selectTheme(theme: string) {
    localStorage.setItem("luna-red-theme", theme);
    this._themeUrl.next(theme);
  }

  constructor() {
    const _themeUrl = localStorage.getItem("luna-red-theme");
    if (_themeUrl) {
      this._themeUrl.next(_themeUrl);
    } else {
      localStorage.setItem("luna-red-theme", 'dark');
      this._themeUrl.next(`corp`);
    }
  }

}
