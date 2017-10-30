import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MasonryModule } from 'angular2-masonry';
import { ROUTES } from 'app/common/routes';
import { PagesModule } from 'app/pages/pages.module';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FloatingTriggerComponent } from './header/components/floating-trigger/floating-trigger.component';
import { HeaderDesktopComponent } from './header/components/header/header-desktop/header-desktop.component';
import { MainMenuComponent } from './header/components/header/header-desktop/main-menu/main-menu.component';
import { HeaderMobileComponent } from './header/components/header/header-mobile/header-mobile.component';
import { MobilemenuComponent } from './header/components/header/header-mobile/mobilemenu/mobilemenu.component';
import { HeaderComponent } from './header/components/header/header.component';
import { AddsComponent } from './posts/adds/adds.component';
import { HeaderModule } from 'app/header/header.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AddsComponent
  ],
  imports: [
    HeaderModule,
    SharedModule,
    PagesModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MasonryModule,
    RouterModule.forRoot(ROUTES),
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
