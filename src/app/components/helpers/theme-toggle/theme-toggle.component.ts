import { Component, OnInit } from '@angular/core';
import { ThemesService } from "../../../services/themes/themes.service";

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  public _theme: string;

  constructor(private themeService: ThemesService) { }

  ngOnInit () {
    this.themeService.themeUrl.subscribe((themeUrl: string) => this.selectedTheme(themeUrl))
  }


  private selectedTheme = (theme: string) => {
    this._theme = theme;
  }

  public onChange (themeName: string) {
    if(themeName) {
      this.themeService.selectTheme(themeName);
    } else {
      this.themeService.selectTheme(themeName);
    }

  }
}
