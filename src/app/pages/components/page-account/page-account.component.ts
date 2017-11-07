import { Component, OnInit } from '@angular/core';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';

@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styleUrls: ['./page-account.component.scss']
})
export class PageAccountComponent implements OnInit {
  data: any;
  cropperSettings: CropperSettings;

  constructor() {

      this.cropperSettings = new CropperSettings();
      this.cropperSettings.width = 150;
      this.cropperSettings.height = 100;
      this.cropperSettings.croppedWidth =150;
      this.cropperSettings.croppedHeight = 100;
      this.cropperSettings.canvasWidth = 400;
      this.cropperSettings.canvasHeight = 300;

      this.data = {};

  }



  ngOnInit() {
  }

}
