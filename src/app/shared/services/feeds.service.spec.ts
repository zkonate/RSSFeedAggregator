/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeedsService } from './feeds.service';

describe('Service: Feeds', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedsService]
    });
  });

  it('should ...', inject([FeedsService], (service: FeedsService) => {
    expect(service).toBeTruthy();
  }));
});
