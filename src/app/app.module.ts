import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './header/header-desktop/main-menu/main-menu.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDesktopComponent } from './header/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageProjectsComponent } from './pages/page-projects/page-projects.component';
import { PageAccountComponent } from './pages/page-account/page-account.component';
import { PageGalleryComponent } from './pages/page-gallery/page-gallery.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    PageAboutComponent,
    PageProjectsComponent,
    PageAccountComponent,
    PageGalleryComponent,
    PageHomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '',component: PageHomeComponent},
      {path: 'about',component: PageAboutComponent},
      {path: 'projects',component: PageProjectsComponent},
      {path: 'gallery',component: PageGalleryComponent},
      {path: 'account',component: PageAccountComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
