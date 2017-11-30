import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  logos = [
    { title: 'Brick 2',
      src: 'assets/images/logo-angular.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-nodejs.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-mongodb.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-express.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-typescript.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-sass.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-ubuntu.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-elastic.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-html.png'},
    { title: 'Brick 2',
      src: 'assets/images/logo-css3.png'}
 ]

 todos = [
    { name:"01",
      status:"done"},
    { name:"02",
      status:"done"},
      { name:"03",
      status:"done"},
      { name:"04",
      status:"done"},
      { name:"05",
      status:"done"},
      { name:"06",
      status:"done"},
      { name:"07",
      status:"open"},
      { name:"08",
      status:"open"},
      { name:"09",
      status:"done"},
      { name:"10",
      status:"open"},
      { name:"11",
      status:"open"},
 ]

  user = {
    name: 'Reto',
    age: 41
  };

  constructor() { }

  ngOnInit() {
  }

}
