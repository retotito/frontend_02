import { ROUTES } from 'app/common/routes';
import { RouterModule } from '@angular/router';
import { AuthwidgetComponent } from 'shared/components/authwidget/authwidget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from 'app/header/header-desktop/main-menu/main-menu.component';
import { HeaderComponent } from 'app/header/header.component';
import { HeaderDesktopComponent } from 'app/header/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from 'app/header/header-mobile/header-mobile.component';
import { MobilemenuComponent } from 'app/header/header-mobile/mobilemenu/mobilemenu.component';
import { FloatingTriggerComponent } from 'app/header/floating-trigger/floating-trigger.component';
import { TranslateModule } from '@ngx-translate/core';
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
