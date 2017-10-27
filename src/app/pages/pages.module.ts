import { PageProjectsComponent } from './components/page-projects/page-projects.component';
import { PageAccountComponent } from './components/page-account/page-account.component';
import { PageGalleryComponent } from './components/page-gallery/page-gallery.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { SasstestComponent } from './components/sasstest/sasstest.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TodosComponent } from './components/todos/todos.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './components/authentication/auth.routes';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'auth',component: AuthenticationComponent, children: AUTH_ROUTES},
    ]),
  ],
  declarations: [
    PageProjectsComponent,
    PageAccountComponent,
    PageGalleryComponent,
    PageHomeComponent,
    SasstestComponent,
    TodosComponent,
    SignupComponent,
    SigninComponent,
    LogoutComponent,
    AuthenticationComponent
  ],
  exports: [
    PageProjectsComponent,
    PageAccountComponent,
    PageGalleryComponent,
    PageHomeComponent,
    SasstestComponent,
    TodosComponent,
    SignupComponent,
    SigninComponent,
    LogoutComponent,
    AuthenticationComponent
  ]
})
export class PagesModule { }
