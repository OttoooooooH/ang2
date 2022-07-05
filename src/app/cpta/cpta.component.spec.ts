import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptaComponent } from './cpta.component';

describe('CptaComponent', () => {
  let component: CptaComponent;
  let fixture: ComponentFixture<CptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CptaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
