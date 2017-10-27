import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthwidgetComponent } from './authwidget.component';

describe('AuthwidgetComponent', () => {
  let component: AuthwidgetComponent;
  let fixture: ComponentFixture<AuthwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
