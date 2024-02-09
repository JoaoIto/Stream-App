import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoDescComponent } from './carrinho-desc.component';

describe('CarrinhoDescComponent', () => {
  let component: CarrinhoDescComponent;
  let fixture: ComponentFixture<CarrinhoDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
