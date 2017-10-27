import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { AuthwidgetComponent } from './authwidget/authwidget.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FloatingTriggerComponent } from './header/floating-trigger/floating-trigger.component';
import { HeaderDesktopComponent } from './header/header-desktop/header-desktop.component';
import { MainMenuComponent } from './header/header-desktop/main-menu/main-menu.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { MobilemenuComponent } from './header/header-mobile/mobilemenu/mobilemenu.component';
import { HeaderComponent } from './header/header.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { AUTH_ROUTES } from './pages/authentication/auth.routes';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LogoutComponent } from './pages/authentication/logout/logout.component';
import { SigninComponent } from './pages/authentication/signin/signin.component';
import { SignupComponent } from './pages/authentication/signup/signup.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageAccountComponent } from './pages/page-account/page-account.component';
import { PageGalleryComponent } from './pages/page-gallery/page-gallery.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProjectsComponent } from './pages/page-projects/page-projects.component';
import { TodosComponent } from './pages/todos/todos.component';
import { AddsComponent } from './posts/adds/adds.component';
import { SasstestComponent } from './sasstest/sasstest.component';
import { AuthService } from './shared/services/auth.service';
import { CategoriesService } from './shared/services/categories.service';
import { MobileMenuService } from './shared/services/mobile-menu.service';
import { TodosService } from './shared/services/todos.service';
import { SharedModule } from 'shared/shared.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AddsComponent,
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
    TodosComponent,
    AnimationsComponent,
    MobilemenuComponent,
    SasstestComponent,
    FloatingTriggerComponent
  ],
  imports: [
    SharedModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MasonryModule,
    RouterModule.forRoot([
      {path: '',component: PageHomeComponent},
      {path: 'about',component: PageAboutComponent},
      {path: 'projects',component: PageProjectsComponent},
      {path: 'gallery',component: PageGalleryComponent},
      {path: 'account',component: PageAccountComponent},
      {path: 'auth',component: AuthenticationComponent, children: AUTH_ROUTES},
      {path: 'todos',component: TodosComponent},
      {path: 'animations',component: AnimationsComponent},
      {path: 'sass',component: SasstestComponent}
    ]),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
