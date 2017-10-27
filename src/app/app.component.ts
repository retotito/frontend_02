import { MobileMenuService } from './shared/services/mobile-menu.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public mmService: MobileMenuService,
    private translate: TranslateService
  ) { 
    translate.addLangs(["en","de"]);
    translate.setDefaultLang('en');
    let browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|de/) ? browserlang : "en");
  }

}
