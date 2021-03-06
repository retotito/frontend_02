import { Router } from '@angular/router';
import { AfterViewChecked, Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { environment } from '../../../../environments/environment';
import { UserService } from 'shared/services/user.service';
import { AvatarService } from 'shared/services/avatar.service';
import { User } from 'shared/models/user.model';
import { AppError } from 'app/common/app-error';
import { BadInput } from 'app/common/bad-input';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewChecked{
    myForm: FormGroup;
    passwordMinLength = 8;
    translationObject = {
        "minLength":this.passwordMinLength
    }
    emailInUse = false;
    authcodeNotValid = false;
    user:User = {};  // not set to null to avoid a null pointer exeption in the html [(ngModel="")]
    placeholderImg = "assets/images/placeholder.png";
    environmetUrl = environment.resturl;

    constructor(
        private UserService: UserService,
        private AvatarService: AvatarService,
        private router: Router,
        private elem: ElementRef
    ) {}

    getUser() {
        this.UserService.queryAll(localStorage.getItem("userId"))
        .take(1)   // use this operator to unsubscribe after 1 item
        .subscribe(
            user => {
                this.user = user[0];
                //this.user["avatar"]="assets/images/reto-kuepfer.jpg";
                console.log(user);
            },
            (error: AppError) => {
            if (error instanceof BadInput) {
                // here could add a form error....
    
                console.log("Input is not accepted");
            } else {
                throw error;  // throw error to be handled by global error handler
            }
            }
        );
    }

    clickUpdateAvatar() {
        document.getElementById('avatar-input').click();
    }

    clickDeleteAvatar() {
        this.deleteAvatar();
    }

    deleteAvatar() {
        this.AvatarService.delete("99")
        .take(1)   
        .subscribe(
            res => {
                console.log("delete successfull", res.url);
                //console.log(res);
                this.user["avatar"] = null;
                //this.user["avatar"] = avatarUrl;  // use local image
            },
            (error: AppError) => {
            if (error instanceof BadInput) {
                console.log("AppError",error);
            } else {
                console.log("ErrorHandler",error);
                throw error;  // throw error to be handled by global error handler
            }
            }
        );
    }


    updateAvatar(event) {
        var avatarUrl = ""
        var reader = new FileReader();
        reader.onload = (event:any) => {
            avatarUrl = event.target.result;
        }
        reader.readAsDataURL(event.srcElement.files[0]);
          
        // console.log(event.srcElement.files);
        let file = event.srcElement.files[0];
        // console.log("-------------------");
        // let files = this.elem.nativeElement.querySelector('#avatar-input').files;
        // let file = files[0];
        let formData = new FormData();
        formData.append('myfile', file, file.name);
        console.log(formData);


        this.AvatarService.upload(formData)
        .take(1)   // use this operator to unsubscribe after 1 item
        .subscribe(
            res => {
                console.log("upload successfull", res.url);
                console.log(res);
                this.user["avatar"] = res.url.replace(/_original(?![\s\S]*_original)/, "_cover-300x300");
                //this.user["avatar"] = avatarUrl;  // use local image
            },
            (error: AppError) => {
            if (error instanceof BadInput) {
                // here could add a form error....
    
                console.log("Input is not accepted");
            } else {
                throw error;  // throw error to be handled by global error handler
            }
            }
        );

    }



    onSubmit() {
        const user = new User(
        );
        user.firstname = this.myForm.value.firstName;
        user.lastname = this.myForm.value.lastName,
        console.log ("update user",user);
        this.UserService.update(user)
        .take(1)   // use this operator to unsubscribe after 1 item
        .subscribe(
            user => {
                //this.user = user[0];
                console.log(user);
            },
            (error: AppError) => {
            if (error instanceof BadInput) {
                // here could add a form error....
    
                console.log("Input is not accepted");
            } else {
                throw error;  // throw error to be handled by global error handler
            }
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
        this.getUser();

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
            ])
        });
    }

    ngAfterViewChecked() {
    
    }

    
}