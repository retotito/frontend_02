import { ImageCropperComponent } from 'ng2-img-cropper';
import { AuthGuard } from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LangwidgetComponent } from 'shared/components/langwidget/langwidget.component';
import { AuthService } from 'shared/services/auth.service';
import { CategoriesService } from 'shared/services/categories.service';
import { MobileMenuService } from 'shared/services/mobile-menu.service';
import { TodosService } from 'shared/services/todos.service';
import { AuthwidgetComponent } from 'shared/components/authwidget/authwidget.component';
import { ROUTES } from 'app/common/routes';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DragulaModule
  ],
  declarations: [
    LangwidgetComponent,
    AuthwidgetComponent,
    ImageCropperComponent,
    UploadImageComponent,
    UploadImagesComponent
  ],
  exports: [
    LangwidgetComponent,
    AuthwidgetComponent,
    ImageCropperComponent,
    UploadImageComponent,
    UploadImagesComponent
  ],
  providers: [
    AuthService,
    TodosService,
    CategoriesService,
    MobileMenuService,
    AuthGuard
  ]
})
export class SharedModule { }
