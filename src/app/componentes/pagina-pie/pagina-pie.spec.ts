import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPieComponent } from './pagina-pie';

describe('PaginaPie', () => {
  let component: PaginaPieComponent;
  let fixture: ComponentFixture<PaginaPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPieComponent]
    })
    .compileComponents();

  fixture = TestBed.createComponent(PaginaPieComponent);
  component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
