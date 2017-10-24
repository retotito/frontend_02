import { TranslateService } from '@ngx-translate/core';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.scss']
})
export class AddsComponent implements OnInit {
  myForm: FormGroup;
  posts:any [];
  mainCategories:any [];
  categories:any [];
  currentLang = this.translate.currentLang;

  constructor(
    private categoriesService: CategoriesService,
    public translate: TranslateService
  ) { }

  queryCategories() {
    this.categoriesService.queryAll(this.myForm.value.catquery)
    .subscribe(posts => {
      this.categories = posts
      console.log(this.categories);
    
    });
  }

  queryMainCats(parent: String){
    let params = '?parent='+parent+'&lang='+this.currentLang;

    this.categoriesService.queryAll(params)
    .subscribe(posts => {
      this.mainCategories = posts;
      console.log(this.mainCategories);
    });
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      catquery: new FormControl(null, Validators.required),
    });

    this.queryMainCats("none");
  }

}
