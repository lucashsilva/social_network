/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersMockService } from './users-mock.service';

describe('Service: UsersMock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersMockService]
    });
  });

  it('should ...', inject([UsersMockService], (service: UsersMockService) => {
    expect(service).toBeTruthy();
  }));
});
