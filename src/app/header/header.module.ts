import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ROUTES } from 'app/common/routes';
import { FloatingTriggerComponent } from 'app/header/components/floating-trigger/floating-trigger.component';
import { HeaderDesktopComponent } from 'app/header/components/header/header-desktop/header-desktop.component';
import { MainMenuComponent } from 'app/header/components/header/header-desktop/main-menu/main-menu.component';
import { HeaderMobileComponent } from 'app/header/components/header/header-mobile/header-mobile.component';
import { MobilemenuComponent } from 'app/header/components/header/header-mobile/mobilemenu/mobilemenu.component';
import { HeaderComponent } from 'app/header/components/header/header.component';
import { SharedModule } from 'shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MainMenuComponent,
    HeaderComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    MobilemenuComponent,
    FloatingTriggerComponent
  ],
  exports: [
    MainMenuComponent,
    HeaderComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    MobilemenuComponent,
    FloatingTriggerComponent
  ]
})
export class HeaderModule { }
