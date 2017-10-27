import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-langwidget',
  templateUrl: './langwidget.component.html',
  styleUrls: ['./langwidget.component.css']
})
export class LangwidgetComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  switchLanguage(language: string) {
    this.translate.use(language);
  }



  ngOnInit() {
  }

}
