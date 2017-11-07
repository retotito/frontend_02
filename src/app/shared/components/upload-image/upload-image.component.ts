import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  @Input() imgEvent: any = null;
  @Output() onDeleteImage = new EventEmitter(); 
  url: any = "assets/images/placeholder.png";

  constructor() { }

  deleteImage () {
    this.onDeleteImage.emit();
  }

  readUrl() {
    if (this.imgEvent) {
      var reader = new FileReader();
    
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
    
      reader.readAsDataURL(this.imgEvent);
    }
  }

  ngOnInit() {
    //console.log(this.imgEvent);
    this.readUrl();
  }

}
