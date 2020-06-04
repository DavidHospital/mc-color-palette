import { TestBed } from '@angular/core/testing';

import { McTextureService } from './mc-texture.service';

describe('McTextureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: McTextureService = TestBed.get(McTextureService);
    expect(service).toBeTruthy();
  });
});
