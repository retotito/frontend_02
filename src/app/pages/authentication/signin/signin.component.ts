import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from '../../../auth/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) {}

    myForm: FormGroup;
  
    onSubmit() {
        const user = new User (
            this.myForm.value.email,
            this.myForm.value.password
        );
        console.log(user);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.user._id);
                    this.router.navigateByUrl('//account');
                },
                error => {
                    console.log(error);
                }
            );
        this.myForm.reset();
    }
  
    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
             password: new FormControl(null, Validators.required)
        });
    }
}
