import { TestBed, inject } from '@angular/core/testing';

import { MobileMenuService } from './mobile-menu.service';

describe('MobileMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileMenuService]
    });
  });

  it('should be created', inject([MobileMenuService], (service: MobileMenuService) => {
    expect(service).toBeTruthy();
  }));
});
