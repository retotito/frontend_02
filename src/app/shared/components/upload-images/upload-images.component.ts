import { Component, OnInit, OnDestroy} from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit, OnDestroy {

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('first-bag', {
      
    });
  }

  /* myImageUpload */
  url = "assets/images/placeholder.png";
  images = [];

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
    
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
    
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  clickChooseFiles() {
    document.getElementById('chooseFiles').click();
  }

  addImages(event) {
    if (event.target.files) {
      var reader = new FileReader();
      
      for (var file of event.target.files) {
        this.images.push(file);
        
      }
      //this.images = event.target.files;
      console.log(this.images);
    }
  }

  deleteImage(image) {
    let index = this.images.indexOf(image);
    this.images.splice(index, 1);
  }


  ngOnInit() {
  }

  ngOnDestroy():void {
    this.dragulaService.destroy("first-bag");
 }
 

}
