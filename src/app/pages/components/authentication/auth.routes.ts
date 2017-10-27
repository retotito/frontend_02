import { Routes  } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';

export const AUTH_ROUTES:  Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signout', component: LogoutComponent},
    { path: '', redirectTo: 'signup', pathMatch: 'full'},
]