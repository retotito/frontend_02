import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  @Input() imgEvent: any = null;
  @Input() oneIsCut: boolean = false;
  @Output() onDeleteImage = new EventEmitter();
  @Output() onCutImage = new EventEmitter(); 
  url: any = "assets/images/placeholder.png";
  isCut:boolean = false;
  oneiscut = this.oneIsCut;

  constructor(private domSanitizer: DomSanitizer) { }

  // deleteImage () {
  //   this.onDeleteImage.emit();
  // }

  cutImage () {
    this.isCut = true;
    this.onCutImage.emit();
    console.log("cut");
  }

  dropImage () {
    console.log("drop");
  }

  readUrl() {
    if (this.imgEvent.src) {
      this.url = this.imgEvent.src;
      // this.url = encodeURI(this.imgEvent.src);
      //       this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.imgEvent.src);

      console.log(" " + this.imgEvent.src);
    }
    else if (this.imgEvent) {
      var reader = new FileReader();
    
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
    
      reader.readAsDataURL(this.imgEvent);
    }
  }

  ngOnInit() {
    console.log(this.oneIsCut);
    //console.log(this.imgEvent);
    this.readUrl();
  }

}
