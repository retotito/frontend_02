import { Component, OnInit, Renderer } from '@angular/core';
import { CategoriesService } from 'shared/services/categories.service';
import { ApiLaguagesService } from 'shared/services/laguages.service';
import { AppError } from 'app/common/app-error';
import { BadInput } from 'app/common/bad-input';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [
        trigger('toggleHeight', [
            state('true', style({
                height: '0',
                //opacity: '0'
            })),
            state('false', style({
                height: '*',
                //opacity: '1'
            })),
            transition('false => true', animate('200ms ease-in')),
            transition('true => false', animate('200ms ease-out'))
        ])
    ]
})

export class CategoriesComponent implements OnInit {
  languages: any = {};
  categories: any = [];
  categoriesTree: any = [];
  isActive = "true";
  testi = "en";


  constructor(
    private languageService: ApiLaguagesService,
    private categoriesService: CategoriesService,
    private render:Renderer
  ) { }

  addTest() {
    console.log("testi");
    this.categories.push({
      catType:"style",
      parent:1510754529708,
      name:{
        de:"testi"
      }
    });
    console.log(this.categories);
  }

  toggleSelected(isSelected, event:any) {
    console.log(isSelected);
    console.log("-------------------------");
    var childUL = event.srcElement.parentElement.getElementsByTagName("ul")[0];
    
    
    // event.preventDefault();
    if (isSelected == "true") {isSelected = "false"}
    else {isSelected ="true"};
    this.render.setElementAttribute(event.target,"isselected",isSelected);
    this.render.setElementAttribute(childUL,"isselected",isSelected);
  }

  editItem () {
    console.log("yoyo edit");
  }


  getLanguages = ()=> {
    return new Promise ((resolve, reject) => {
      if (!this.languageService.languages) {
        this.languageService.getAll()
          .subscribe(
            result => {
              this.languageService.languages = result;
              this.languages = this.languageService.languages;
              resolve('languages loaded')
            },
            (error: AppError) => {
              if (error instanceof BadInput) {
                // here could add a form error....
                console.log("Input is not accepted");
              } else {
                throw error;  // throw error to be handled by global error handler
              }
              reject('error loading languages');
            }
          );
      } else {
        this.languages = this.languageService.languages;
        resolve();
      }
    });
  }

  getCategories = ()=> {
    return new Promise ((resolve, reject) => {
        this.categoriesService.getAll()
          .subscribe(
            result => {
              this.categories = result;
              resolve('categories loaded')
            },
            (error: AppError) => {
              if (error instanceof BadInput) {
                // here could add a form error....
                console.log("Input is not accepted");
              } else {
                throw error;  // throw error to be handled by global error handler
              }
              reject('error loading languages');
            }
          );
    });
  }

  createCategoriesTree = () => {
    
  }

  

  

  ngOnInit() {
    // this.getLanguages()
    // .then((resolve)=> {
    //   console.log(resolve);
    //   return this.getCategories();
    // })
    // .then((resolve)=> {     
    //   console.log(resolve);
    //   console.log(this.categories);   
    // });

    Promise.all([
      this.getCategories(), 
      this.getLanguages()
    ]).then((resolve)=> {
      console.log(this.categories); 
    });
  }

}
