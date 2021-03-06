import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 1 + 4 = 5', () => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('Deve garantir que 1 - 4 = -3', () => {
    const soma = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(soma).toEqual(-3);
  });

  it('Deve garantir que 1 / 4 = 0.25', () => {
    const soma = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(soma).toEqual(0.25);
  });

  it('Deve garantir que 1 * 4 = 4', () => {
    const soma = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(soma).toEqual(4);
  });

  it('Deve retornar 0 para operação inválida', () => {
    const soma = service.calcular(1, 4, '%');
    expect(soma).toEqual(0);
  });

});
