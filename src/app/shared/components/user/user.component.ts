import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { UserService } from 'shared/services/user.service';
import { User } from 'shared/models/user.model';
import { AppError } from 'app/common/app-error';
import { BadInput } from 'app/common/bad-input';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    myForm: FormGroup;
    passwordMinLength = 8;
    translationObject = {
        "minLength":this.passwordMinLength
    }
    emailInUse = false;
    authcodeNotValid = false;
    user:User = null;

    constructor(
        private UserService: UserService,
        private router: Router
    ) {}

    getUser() {
      this.UserService.getAll()
      .subscribe(
        user => this.user = user,
        (error: AppError) => {
          if (error instanceof BadInput) {
            // here could add a form error....
  
            console.log("Input is not accepted");
          } else {
            console.log("yoyo");
            throw error;  // throw error to be handled by global error handler
          }
        }
      );
    }



    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.code
        );
        //console.log (user);
        
        // this.emailInUse = false;
        // this.authcodeNotValid = false;
        // this.authService.signup(user) 
        //     .subscribe (
        //         data => {
        //             console.log(data),
        //             this.myForm.reset();
        //             this.router.navigate(['/auth/signin']);
        //         },
        //         error => {
        //             this.errorHandler(error);
        //             console.log(error);
        //         }
        //     );
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
      this.getUser();

        this.myForm = new FormGroup({
            firstName: new FormControl("maxi", [ 
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
            ])
        });
    }

    
}