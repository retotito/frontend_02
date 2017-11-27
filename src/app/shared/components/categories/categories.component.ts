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
import { CatmodalService } from 'shared/components/categories/catmodal/catmodal.service';

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
  modalItem = {
    editType: "",
    type: "",
    parent: {},
    languageInputs: {},
    _id: 0
  };


  constructor(
    private languageService: ApiLaguagesService,
    private categoriesService: CategoriesService,
    private render:Renderer,
    public modalService: CatmodalService
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
    var childUL = event.srcElement.parentElement.getElementsByTagName("ul")[0];
    
    
    // event.preventDefault();
    if (isSelected == "true") {isSelected = "false"}
    else {isSelected ="true"};
    this.render.setElementAttribute(event.target,"isselected",isSelected);
    //this.render.setElementAttribute(childUL,"isselected",isSelected);
  }

  editItem (selectedItem) {
    console.log("selected",selectedItem);
    this.modalItem.editType = "edit";
    this.modalItem.type = selectedItem.catType;
    if (selectedItem.catType != "top") {
    this.modalItem.parent = this.categories.filter(item => item.uniqId == selectedItem.parent)[0];
    }
    this.modalItem.languageInputs = selectedItem.name;
    this.modalItem._id = selectedItem._id;

    console.log(this.modalItem);
 
    this.modalService.isOpen = true;
  }

  createItem (type:string, item:any) {
    this.modalItem.editType = "create";
    this.modalItem.type = type;
    if (type == "top"){
      this.modalItem.parent = 0;
    } else {
      let parentId = item.parentElement.parentElement.parentElement.parentElement.getAttribute("uniqId");
      this.modalItem.parent = this.categories.filter(item => item.uniqId == parentId)[0];
    }
    this.modalItem.languageInputs = {};
 
    this.modalService.isOpen = true;
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


  createPostObject(inputs): object{
    let item = {};
    item['catType'] = this.modalItem.type;
    item['parent'] = this.modalItem.parent['uniqId'];
    for (let input of inputs) {
      item['name'+input.label] = input.value;
    }
    item['_id'] = this.modalItem._id;
    return item;
  }
  

  createCategory(data) {
    this.createPost(this.createPostObject(data))
      .then((newPost)=> {
        //console.log(newPost);
        this.modalService.isOpen = false;
        this.categories.push(newPost);
    });
    //console.log(this.createPostObject(data));
  }

  updateCategory(data) {
    this.updatePost(this.createPostObject(data))
      .then((newPost)=> {
        console.log("updated Post",newPost);
        this.modalService.isOpen = false;
      //this.categories.push(newPost);
    });
  }

  updatePost = (postObject)=> { 
    return new Promise ((resolve, reject)=> {
      const newPost = postObject;
      const post = newPost;
      this.categoriesService.update(post)
        .subscribe(
          newPost => {
            post['_id'] = newPost._id;
            resolve(newPost);
          },
          (error: AppError) => {
            if (error instanceof BadInput) {
              // here could add a form error....

              console.log("Input is not accepted");
              reject('error');
            } else {
              reject('error');
              throw error;  // throw error to be handled by global error handler
            }
          }
        );
    });
  }

  deleteCategory(event) {
    console.log("delete"); 
  }

  createPost = (postObject)=> { 
    return new Promise ((resolve, reject)=> {
      const newPost = postObject;
      const post = newPost;
      this.categoriesService.create(post)
        .subscribe(
          newPost => {
            post['_id'] = newPost._id;
            //this.posts.splice(0,0, post);
            console.log(newPost);
            //this.myForm.reset();
            resolve(newPost);
          },
          (error: AppError) => {
            if (error instanceof BadInput) {
              // here could add a form error....

              console.log("Input is not accepted");
              reject('error');
            } else {
              reject('error');
              throw error;  // throw error to be handled by global error handler
            }
          }
        );
    });
  }
  


  

  

  ngOnInit() {
    this.getLanguages();

    Promise.all([
      this.getCategories(), 
      this.getLanguages()
    ]).then((resolve)=> {
      console.log(this.categories); 
    });
  }

}
