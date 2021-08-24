import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedMatrixComponent } from './components/helpers/red-matrix/red-matrix.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PortfolioComponent } from './components/portfolio/print-media.component';
import { NavMenuComponent } from './components/layout/nav-menu/nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IvyGalleryModule } from 'angular-gallery';
import { TabsComponent } from './components/helpers/tabs/tabs.component';
import { TabComponent } from './components/helpers/tab/tab.component';
import { ThemeToggleComponent } from './components/helpers/theme-toggle/theme-toggle.component';
import { AffiliateListComponent } from './components/articles/affiliate-list/affiliate-list.component';
import { WelcomeServicesComponent } from './components/articles/welcome-services/welcome-services.component';
import { StepsToSuccessComponent } from './components/articles/steps-to-success/steps-to-success.component';
import { HeroServicesComponent } from './components/articles/hero-services/hero-services.component';

@NgModule({
  declarations: [
    AppComponent,
    RedMatrixComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    PortfolioComponent,
    NavMenuComponent,
    TabsComponent,
    TabComponent,
    ThemeToggleComponent,
    AffiliateListComponent,
    WelcomeServicesComponent,
    StepsToSuccessComponent,
    HeroServicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    IvyGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
