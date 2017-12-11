import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationssearchComponent } from './locationssearch.component';

describe('LocationssearchComponent', () => {
  let component: LocationssearchComponent;
  let fixture: ComponentFixture<LocationssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
