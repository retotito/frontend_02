import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangwidgetComponent } from 'shared/components/langwidget/langwidget.component';
import { AuthService } from 'shared/services/auth.service';
import { TodosService } from 'shared/services/todos.service';
import { CategoriesService } from 'shared/services/categories.service';
import { MobileMenuService } from 'shared/services/mobile-menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LangwidgetComponent
  ],
  exports: [
    LangwidgetComponent
  ],providers: [
    AuthService,
    TodosService,
    CategoriesService,
    MobileMenuService
  ]
})
export class SharedModule { }
