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
import { PagesModule } from 'app/pages/pages.module';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';
import { AuthwidgetComponent } from './authwidget/authwidget.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FloatingTriggerComponent } from './header/floating-trigger/floating-trigger.component';
import { HeaderDesktopComponent } from './header/header-desktop/header-desktop.component';
import { MainMenuComponent } from './header/header-desktop/main-menu/main-menu.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { MobilemenuComponent } from './header/header-mobile/mobilemenu/mobilemenu.component';
import { HeaderComponent } from './header/header.component';
import { AUTH_ROUTES } from './pages/components/authentication/auth.routes';
import { AuthenticationComponent } from './pages/components/authentication/authentication.component';
import { PageAccountComponent } from './pages/components/page-account/page-account.component';
import { PageGalleryComponent } from './pages/components/page-gallery/page-gallery.component';
import { PageHomeComponent } from './pages/components/page-home/page-home.component';
import { PageProjectsComponent } from './pages/components/page-projects/page-projects.component';
import { SasstestComponent } from './pages/components/sasstest/sasstest.component';
import { TodosComponent } from './pages/components/todos/todos.component';
import { AddsComponent } from './posts/adds/adds.component';

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
    AuthwidgetComponent,
    MobilemenuComponent,
    FloatingTriggerComponent
  ],
  imports: [
    SharedModule,
    PagesModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MasonryModule,
    RouterModule.forRoot([
      {path: '',component: PageHomeComponent},
      {path: 'projects',component: PageProjectsComponent},
      {path: 'gallery',component: PageGalleryComponent},
      {path: 'account',component: PageAccountComponent},
      {path: 'auth',component: AuthenticationComponent, children: AUTH_ROUTES},
      {path: 'todos',component: TodosComponent},
      {path: 'grid',component: SasstestComponent}
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
