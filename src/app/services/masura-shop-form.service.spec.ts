import { TestBed } from '@angular/core/testing';

import { MasuraShopFormService } from './masura-shop-form.service';

describe('MasuraShopFormService', () => {
  let service: MasuraShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasuraShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
