import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiLaguagesService } from 'shared/services/laguages.service';
import { CatmodalService } from 'shared/components/categories/catmodal/catmodal.service';
import { LanguageService } from '@angular/language-service';
import { AppError } from 'app/common/app-error';
import { BadInput } from 'app/common/bad-input';

@Component({
  selector: 'app-catmodal',
  templateUrl: './catmodal.component.html',
  styleUrls: ['./catmodal.component.scss'],
}) 

export class CatmodalComponent implements OnInit {
  languages: [any];
  @Input() modalItem = {}; 
  @Output() create = new EventEmitter();  
  @Output() update = new EventEmitter();  
  @Output() delete = new EventEmitter();  

  clickCreate() {
    this.create.emit();
  }

  constructor(
    private languageService: ApiLaguagesService,
    public modalService: CatmodalService
  ) { }

  getLanguageInputs (domElement): Array<any> {
    let languagesInputs = [];
    
    var inputs = domElement.getElementsByClassName("languageInput");
    for (let input of inputs) {
      // console.log("label: "+input.getElementsByTagName('label')[0].innerHTML);
      // console.log("input: "+input.getElementsByTagName('input')[0].value);
      let label = input.getElementsByTagName('label')[0].innerHTML;
      let value = input.getElementsByTagName('input')[0].value;

      languagesInputs.push({
        label: label,
        value: value
      });
    }

    

    return languagesInputs;
  }

  getLanguages = ()=> {
    return new Promise ((resolve, reject) => {
      if (!this.languageService.languages) {
        this.languageService.getAll()
          .subscribe(
            result => {
              this.languageService.languages = result;
              this.languages = this.languageService.languages.languages;
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

  closeModalBox() {
    this.modalService.isOpen = false;
  }

  ngOnInit() {
    this.getLanguages();
  }

}
