import { TestBed } from '@angular/core/testing';

import { ProjectNavigatorService } from './project-navigator.service';

describe('ProjectNavigatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectNavigatorService = TestBed.get(ProjectNavigatorService);
    expect(service).toBeTruthy();
  });
});
