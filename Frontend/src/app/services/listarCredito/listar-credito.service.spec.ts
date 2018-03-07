import { TestBed, inject } from '@angular/core/testing';

import { ListarCreditoService } from './listar-credito.service';

describe('ListarCreditoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarCreditoService]
    });
  });

  it('should be created', inject([ListarCreditoService], (service: ListarCreditoService) => {
    expect(service).toBeTruthy();
  }));
});
