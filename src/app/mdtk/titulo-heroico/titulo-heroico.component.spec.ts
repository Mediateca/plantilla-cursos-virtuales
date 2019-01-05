import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloHeroicoComponent } from './titulo-heroico.component';

describe('TituloHeroicoComponent', () => {
  let component: TituloHeroicoComponent;
  let fixture: ComponentFixture<TituloHeroicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloHeroicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloHeroicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
