import { TestBed } from '@angular/core/testing';

import { NoteRouteGuardService } from './note-route-guard.service';

describe('NoteRouteGuardService', () => {
  let service: NoteRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
