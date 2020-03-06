import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosInformacoesComponent } from './livros-informacoes.component';

describe('LivrosInformacoesComponent', () => {
  let component: LivrosInformacoesComponent;
  let fixture: ComponentFixture<LivrosInformacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosInformacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
