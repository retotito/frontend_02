import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from 'shared/services/auth.service';
import { User } from 'shared/models/user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    passwordMinLength = 8;
    translationObject = {
        "minLength":this.passwordMinLength
    }
    emailInUse = false;
    authcodeNotValid = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.code
        );
        //console.log (user);
        
        this.emailInUse = false;
        this.authcodeNotValid = false;
        this.authService.signup(user) 
            .subscribe (
                data => {
                    console.log(data),
                    this.myForm.reset();
                    this.router.navigate(['/auth/signin']);
                },
                error => {
                    this.errorHandler(error);
                    console.log(error);
                }
            );
    }

    errorHandler(error) {
        if (error['error']['104']) {
            this.authcodeNotValid = true;
        }
        if (error['error']['105']) {
            this.emailInUse = true;
        }
    }
    clearEmailError() {
        this.emailInUse = false;
    }

    clearCodeError() {
        this.authcodeNotValid = false;
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, [ 
                Validators.required,
            ]),
            lastName: new FormControl(null, [ 
                Validators.required,
            ]),
            email: new FormControl(null, [
                //Validators.required,
                Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            password: new FormControl(null, [             
                //Validators.required,                                            // assigne multiple Validators by []
                Validators.minLength(this.passwordMinLength)  
            ]),
            code: new FormControl(null, [
                Validators.required
            ]),
        });
    }

    
}