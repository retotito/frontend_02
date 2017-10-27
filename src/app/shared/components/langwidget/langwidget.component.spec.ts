import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangwidgetComponent } from './langwidget.component';

describe('LangwidgetComponent', () => {
  let component: LangwidgetComponent;
  let fixture: ComponentFixture<LangwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
