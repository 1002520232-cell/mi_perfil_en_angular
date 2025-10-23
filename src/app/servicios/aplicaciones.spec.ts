import { TestBed } from '@angular/core/testing';

import { Aplicaciones } from './aplicaciones';

describe('Aplicaciones', () => {
  let service: Aplicaciones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aplicaciones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
