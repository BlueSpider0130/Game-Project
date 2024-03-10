import { TestBed } from '@angular/core/testing';

import { GamePostApiService } from './post.service';

describe('PostService', () => {
  let service: GamePostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamePostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
