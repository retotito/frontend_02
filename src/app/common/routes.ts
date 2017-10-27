import { Routes  } from '@angular/router';

import { PageHomeComponent } from "app/pages/components/page-home/page-home.component";
import { PageProjectsComponent } from "app/pages/components/page-projects/page-projects.component";
import { PageGalleryComponent } from "app/pages/components/page-gallery/page-gallery.component";
import { PageAccountComponent } from "app/pages/components/page-account/page-account.component";
import { AuthenticationComponent } from "app/pages/components/authentication/authentication.component";
import { SignupComponent } from "app/pages/components/authentication/signup/signup.component";
import { SigninComponent } from "app/pages/components/authentication/signin/signin.component";
import { LogoutComponent } from "app/pages/components/authentication/logout/logout.component";
import { TodosComponent } from "app/pages/components/todos/todos.component";
import { SasstestComponent } from "app/pages/components/sasstest/sasstest.component";

export const ROUTES:  Routes = [
    {path: '',component: PageHomeComponent},
    {path: 'projects',component: PageProjectsComponent},
    {path: 'gallery',component: PageGalleryComponent},
    {path: 'account',component: PageAccountComponent},
    {path: 'auth',component: AuthenticationComponent, children: [
        { path: 'signup', component: SignupComponent},
        { path: 'signin', component: SigninComponent},
        { path: 'signout', component: LogoutComponent},
        { path: '', redirectTo: 'signup', pathMatch: 'full'},
    ]},
    {path: 'todos',component: TodosComponent},
    {path: 'grid',component: SasstestComponent}
]