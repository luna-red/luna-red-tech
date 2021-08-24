import { Component, OnInit } from '@angular/core';
import { ThemesService } from './services/themes/themes.service';
import { SafeResourceUrl } from "@angular/platform-browser";
import { faPhoneAlt }  from '@fortawesome/free-solid-svg-icons';
import { faEnvelope }  from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public _theme: string;
  public phoneIcon = faPhoneAlt;
  public emailIcon = faEnvelope;

  constructor (private themeService: ThemesService) {}

  ngOnInit () {
    this.themeService.themeUrl.subscribe((themeUrl: string) => this.selectedTheme(themeUrl))
  }


  private selectedTheme = (theme: string) => {
    this._theme = theme;
  }
}
