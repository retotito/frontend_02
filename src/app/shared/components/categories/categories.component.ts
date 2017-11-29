import { Component, OnInit, Renderer } from '@angular/core';
import { CategoriesService } from 'shared/services/categories.service';
import { ApiLaguagesService } from 'shared/services/laguages.service';
import { AppError } from 'app/common/app-error';
import { BadInput } from 'app/common/bad-input';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
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
            state('false', style({
                height: '0',
                //opacity: '0'
            })),
            state('true', style({
                height: '*',
                //opacity: '1'
            })),
            transition('false => true', animate('200ms ease-in')),
            transition('true => false', animate('200ms ease-out'))
        ])
    ]
})

export class CategoriesComponent implements OnInit {
  languages = [];
  categories: any = [];
  categoriesTree: any = [];
  isActive = "true";
  testi = "en";
  modalItem = {
    editType: "",
    type: "",
    parent: {},
    languageInputs: {},
    _id: 0,
    uniqId : 0
  };


  constructor(
    private languageService: ApiLaguagesService,
    private categoriesService: CategoriesService,
    private render:Renderer,
    public modalService: CatmodalService,
    public translate: TranslateService
  ) { }

  
  selectSortMehthod() {
    if (this.modalItem.type == 'top') {
      this.sortAllCategories();
    } else {
      this.sortSubCategories();
    }
  }

  sortSubCategories() {   // subcategories from same parent and type
    console.log("sort Subcategories");

    let type = this.modalItem.type;
    let parent = this.modalItem.parent;
  }

  sortAllCategories() {
    var currentLang = this.translate.currentLang;
    let categories = [];

    this.categories.forEach((x) => {    // deep copy to not have conflict with *ngFor
      categories.push(Object.assign({}, x));
    })
    categories.map((x) => {x.status = 'DEFAULT'});
    
    categories = categories.sort((a: any, b: any) => {
      if(!a['name'][currentLang]) {   // add key if has none
        a['name'][currentLang] = "";
      }
      if(!b['name'][currentLang]) {   // add key if has none
        b['name'][currentLang] = "";
      }

      if(a['name'][currentLang] < b['name'][currentLang]){
        return -1;
      }else if(a['name'][currentLang] > b['name'][currentLang]){
        return 1;
      } else {
        return 0;
      }
    });
    
    this.categories = categories.concat([]);;
  };

  toggleSelected(isSelected, event:any) {
    var childUL = event.srcElement.parentElement.getElementsByTagName("ul")[0];
    
    
    // event.preventDefault();
    if (isSelected == "true") {isSelected = "false"}
    else {isSelected ="true"};
    this.render.setElementAttribute(event.target,"isselected",isSelected);
    //this.render.setElementAttribute(childUL,"isselected",isSelected);
  }

  editItem (selectedItem) {
    this.modalItem.editType = "edit";
    this.modalItem.type = selectedItem.catType;
    if (selectedItem.catType != "top") {
    this.modalItem.parent = this.categories.filter(item => item.uniqId == selectedItem.parent)[0];
    }
    this.modalItem.languageInputs = selectedItem.name;
    this.modalItem._id = selectedItem._id;
    this.modalItem.uniqId = selectedItem.uniqId;

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
        this.modalService.isOpen = false;
        this.categories.push(newPost);
        this.selectSortMehthod();
    });
  }


  updateCategory(data) {
    this.updatePost(this.createPostObject(data))
      .then((newPost)=> {
        this.modalService.isOpen = false;
        this.updateCategoryLocal(data);
    });
  }

  updateCategoryLocal(inputs) {
    let localUpdateItem = this.categories.filter(item => item._id == this.modalItem._id)[0];
    localUpdateItem.name = {};
    for (let input of inputs) {
      localUpdateItem.name[input.label.toLowerCase()] = input.value;
    }
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

  deleteCategory() {
    this.deletePost(this.modalItem.uniqId)
      .then((newPost)=> {
        this.modalService.isOpen = false;
        this.deleteCategoryLocal();
    });
  }

  deleteCategoryLocal() {  // delete categories and children
    this.categories = this.categories.filter(item => item.uniqId != this.modalItem.uniqId);
    this.categories = this.categories.filter(item => item.parent != this.modalItem.uniqId);
  }

  deletePost = (postObject)=> { 
    return new Promise ((resolve, reject)=> {
      const newPost = postObject;
      const post = newPost;
      this.categoriesService.delete(post)
        .subscribe(
          newPost => {
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

  createPost = (postObject)=> { 
    return new Promise ((resolve, reject)=> {
      const newPost = postObject;
      const post = newPost;
      this.categoriesService.create(post)
        .subscribe(
          newPost => {
            post['_id'] = newPost._id;
            //this.posts.splice(0,0, post);
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
  


  
  listenToLanguageChange () { 
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("lang changed");
      this.sortAllCategories();
    });
  }
  

  ngOnInit() {
    this.getLanguages();

    Promise.all([
      this.getCategories(), 
      this.getLanguages()
    ]).then((resolve)=> {
      this.listenToLanguageChange();
      console.log(this.categories); 
    });
  }

}
