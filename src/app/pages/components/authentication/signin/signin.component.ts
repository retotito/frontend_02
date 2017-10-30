import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from 'shared/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    loginError = false;
    
    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        const user = new User (
            this.myForm.value.email,
            this.myForm.value.password
        );

        this.authService.signin(user)
            .subscribe(
                data => {
                    this.myForm.reset();
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.user._id);
                    this.router.navigateByUrl('//account');
                },
                error => {
                    this.loginError = true;
                    //console.log(error);
                }
            );
    }
  
    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                //Validators.required,
                Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
