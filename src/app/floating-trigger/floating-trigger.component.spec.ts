import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingTriggerComponent } from './floating-trigger.component';

describe('FloatingTriggerComponent', () => {
  let component: FloatingTriggerComponent;
  let fixture: ComponentFixture<FloatingTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
