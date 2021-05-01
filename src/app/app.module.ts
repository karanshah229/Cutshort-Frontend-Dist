// Angular Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { HeaderComponent } from 'src/UIComponents/header/header.component';
import { SidenavLinkComponent } from './dashboard/sidenav/sidenav-link/sidenav-link.component';
import { SidenavDropdownComponent } from './dashboard/sidenav/sidenav-dropdown/sidenav-dropdown.component';
import { SidenavButtonComponent } from './dashboard/sidenav/sidenav-button/sidenav-button.component';
import { SidenavRecentlyViewedComponent } from './dashboard/sidenav/sidenav-recently-viewed/sidenav-recently-viewed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { CardComponent } from 'src/UIComponents/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SidenavComponent,
    HeaderComponent,
    SidenavLinkComponent,
    SidenavDropdownComponent,
    SidenavButtonComponent,
    SidenavRecentlyViewedComponent,
    DashboardComponent,
    DashboardContentComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
