import { Observable } from 'rxjs';
import { BadInput } from './../../common/bad-input';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { TodosService } from '../../shared/services/todos.service';
import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit , OnChanges{
  myForm: FormGroup;
  posts:any [];

  constructor(private todoService: TodosService) { }

  getPosts() {
    this.todoService.getAll()
    .subscribe(
      posts => this.posts = posts,
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

  createPost() {
    const newPost = {
      "title":this.myForm.value.title,
      "description":this.myForm.value.description,
      "rating":this.myForm.value.rating
    }
    const post = newPost;
    this.todoService.create(post)
      .subscribe(
        newPost => {
          post['_id'] = newPost._id;
          this.posts.splice(0,0, post);
          console.log(newPost);
          this.myForm.reset();
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

  updatePost(post) {
    this.todoService.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        }
      )
  }

  deletePost(post) {
    console.log(post._id);
    this.todoService.delete(post._id)
      .subscribe(
        () => {
          console.log("deleted");
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            console.log("post has allready been deleted");
          } else {
            throw error;
          }
        }
      );
  }

  
  ngOnInit() {
    this.getPosts();

    this.myForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  

}
