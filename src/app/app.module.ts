import { AuthService } from './auth/auth.service';
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
import { SignupComponent } from './pages/authentication/signup/signup.component';
import { SigninComponent } from './pages/authentication/signin/signin.component';
import { LogoutComponent } from './pages/authentication/logout/logout.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

import { AUTH_ROUTES } from './pages/authentication/auth.routes';
import { AuthwidgetComponent } from './authwidget/authwidget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    SignupComponent,
    SigninComponent,
    LogoutComponent,
    AuthenticationComponent,
    AuthwidgetComponent,
  ],
  imports: [
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '',component: PageHomeComponent},
      {path: 'about',component: PageAboutComponent},
      {path: 'projects',component: PageProjectsComponent},
      {path: 'gallery',component: PageGalleryComponent},
      {path: 'account',component: PageAccountComponent},
      {path: 'auth',component: AuthenticationComponent, children: AUTH_ROUTES}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
