import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-gallery',
  templateUrl: './page-gallery.component.html',
  styleUrls: ['./page-gallery.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class PageGalleryComponent implements OnInit {
  gridCounter = 0; 
  items = [
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (1).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (2).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (3).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (4).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (5).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (6).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (7).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (8).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (9).jpg'},
    { title: 'Brick 2',
      src: 'assets/images/gallery/pexels (10).jpg'},
 ]

 gridSettings = {
   maxWidth: '200px',
   gapHorizontal: '20px',
   gapVertical: '20px'
 }

 onResize(event) {
  console.log("resize");
 }

 gridIsLoadet() {
  //console.log(this.items.length);
  //console.log(++this.gridCounter);
  ++this.gridCounter
  if (this.gridCounter === this.items.length) {
    this.gridInit();
  }
 }

  gridInit() {
    this.setXDimensions();
  }

  setXDimensions() {
    console.log("allLoadet");
    let gridWrapper = document.getElementById("rk_gridWrapper");
    let wrapperWidth = gridWrapper.clientWidth;
    console.log(wrapperWidth);

  }

  ngAfterViewInit() {
    
  }

  constructor() { }

  ngOnInit() {
  }

}
