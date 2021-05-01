// Angular Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from 'src/UIComponents/header/header.component';
import { SidenavLinkComponent } from './sidenav/sidenav-link/sidenav-link.component';
import { SidenavDropdownComponent } from './sidenav/sidenav-dropdown/sidenav-dropdown.component';
import { SidenavButtonComponent } from './sidenav/sidenav-button/sidenav-button.component';
import { SidenavRecentlyViewedComponent } from './sidenav/sidenav-recently-viewed/sidenav-recently-viewed.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
