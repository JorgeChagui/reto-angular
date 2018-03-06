import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCreditoComponent } from './listar-credito.component';

describe('ListarCreditoComponent', () => {
  let component: ListarCreditoComponent;
  let fixture: ComponentFixture<ListarCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
