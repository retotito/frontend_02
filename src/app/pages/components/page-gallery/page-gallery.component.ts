import { Component, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-page-gallery',
  templateUrl: './page-gallery.component.html',
  styleUrls: ['./page-gallery.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class PageGalleryComponent implements OnInit {
  contentLoaded = false;
  itemsCounter = 0;

  items = [
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels1.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels2.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels3.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels4.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels5.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels6.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels7.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels8.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels9.jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels10.jpg'},
 ]

  onResize(event) {
    //console.log("resize");
  }

  constructor() { }

  ngOnInit() {

  }

  imageLoaded() {
    this.itemsCounter ++;
    if (this.itemsCounter == this.items.length) {
      this.allImagesLoaded();
    }
  }

  allImagesLoaded() {
    this.contentLoaded = true;
  }


  ngAfterViewInit() {
    // window.onload = function() {
    //   this.contentLoaded = true;
    // }
  }
 
  
}
