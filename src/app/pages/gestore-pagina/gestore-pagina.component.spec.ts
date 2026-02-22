import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorePaginaComponent } from './gestore-pagina.component';

describe('GestorePaginaComponent', () => {
  let component: GestorePaginaComponent;
  let fixture: ComponentFixture<GestorePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorePaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
